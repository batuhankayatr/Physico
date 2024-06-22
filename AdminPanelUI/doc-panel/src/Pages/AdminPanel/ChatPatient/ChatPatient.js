import React, { useEffect, useState, useRef } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./chatpatient.css";
import io from "socket.io-client";
import axios from "axios";
import { useSelector } from "react-redux";

const ENDPOINT = "http://localhost:5000";
let socket;

function ChatPatient() {
  const [socketConnected, setSocketConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [chatId, setChatId] = useState(null);
  const { userData } = useSelector((state) => state.userData);
  const { CurrentPatient } = useSelector((state) => state.CurrentPatient);
  const chatPanelRef = useRef(null);

  console.log("ChatPatient -> userData", userData, CurrentPatient);

  useEffect(() => {
    const getChatId = async () => {
      try {
        const { data } = await axios.post('http://localhost:5000/api/chat/access', {
          doctorId: userData.id,
          patientId: CurrentPatient.id,
        });
        setChatId(data._id);
      } catch (error) {
        console.error("Chat ID alınamadı:", error);
      }
    };

    getChatId();
  }, []);

  useEffect(() => {
    if (chatId) {
      socket = io(ENDPOINT);
      const userData = {
        id: "user_id",
      };

      socket.emit("setup", userData);
      socket.on("connected", () => setSocketConnected(true));
      socket.emit('join chat', chatId);

      const messageReceivedHandler = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      };

      socket.on('message received', messageReceivedHandler);

      return () => {
        socket.off('message received', messageReceivedHandler);
        socket.disconnect();
      };
    }
  }, [chatId]);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (chatPanelRef.current) {
      chatPanelRef.current.scrollTop = chatPanelRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (newMessage.trim() === '') return;

    const messageData = {
      senderId: userData.id,
      chatId: chatId,
      senderType: "Doctor",
      content: newMessage,
      createdAt: new Date().toISOString(),
    };

    socket.emit('send message', messageData);
    console.log('Message sent:', messages);
    setNewMessage('');
  };

  return (
    <div className="container-fluid bg-secondary min-vh-100 gradient-bg">
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
                <div ref={chatPanelRef} className="panel-body">
                  <div className="chats">
                    {messages.map((msg, index) => (
                      <div key={index} className={msg.senderDoctor ? 'chat' : 'chat chat-left'}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPatient;
