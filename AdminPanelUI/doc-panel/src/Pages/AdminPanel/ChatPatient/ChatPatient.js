import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./chatpatient.css";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:5000";
let socket;

function ChatPatient() {
  const [socketConnected, setSocketConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    socket = io(ENDPOINT);  // socket'i burada başlatıyoruz
    const userData = {
      id: "user_id", // Gerçek kullanıcı ID'si ile değiştirin
      // Gerekirse diğer kullanıcı verilerini ekleyin
    };

    socket.emit("setup", userData);
    socket.on("connected", () => setSocketConnected(true));
    socket.emit('join chat', "60d21b4667d0d8992e610c85"); // Gerçek sohbet ID'si ile değiştirin

    socket.on('message received', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim() === '') return;

    const messageData = {
      senderId: "60d0fe4f5311236168a109cb", // Gerçek kullanıcı ID'si ile değiştirin
      chatId: "60d21b4667d0d8992e610c85",  // Gerçek sohbet ID'si ile değiştirin
      senderType: "Doctor",               // veya "Patient" kullanıcıya göre değiştirin
      content: newMessage,
      createdAt: new Date().toISOString(),
    };

    // Mesajı sunucuya gönder
    socket.emit('send message', messageData);

    // Mesaj listesini yerel olarak güncelle
    setMessages((prevMessages) => [...prevMessages, messageData]);
    setNewMessage('');
  };

  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        <div id="sideBar" className="col-4 col-md-2 bg-dark vh-100 position-fixed">
          <Sidebar />
        </div>

        <div className="col-4 col-md-2"></div>
        <div className="col">
          <div className="container bootstrap snippets bootdeys">
            <div className="col-md-7 col-xs-12 col-md-offset-2">
              <div className="panel" id="chat">
                <div className="panel-heading">
                  <h3 className="panel-title">Chat</h3>
                </div>
                <div className="panel-body">
                  <div className="chats">
                    {messages.map((msg, index) => (
                      <div key={index} className={msg.senderType === 'Doctor' ? 'chat' : 'chat chat-left'}>
                        <div className="chat-avatar">
                          <a className="avatar avatar-online" href="#" title={msg.senderType}>
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
                          </a>
                        </div>
                        <div className="chat-body">
                          <div className="chat-content">
                            <p>{msg.content}</p>
                            <time className="chat-time">{new Date(msg.createdAt).toLocaleTimeString()}</time>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="panel-footer">
                  <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Say something"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-primary" type="button" onClick={sendMessage}>
                          Send
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              {/* End Panel Chat */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPatient;
