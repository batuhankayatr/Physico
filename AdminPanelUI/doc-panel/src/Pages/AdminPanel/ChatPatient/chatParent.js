import React, { useState, useEffect } from 'react';
import ChatPatient from './ChatPatient';

function ChatParent() {
  const [currentDoctor, setCurrentDoctor] = useState(null);
  const [currentPatient, setCurrentPatient] = useState(null);
  const [currentChatId, setCurrentChatId] = useState('chatId123'); // Gerçek chatId'yi buraya koyun
  const [senderType, setSenderType] = useState('Doctor'); // veya 'Patient'

  useEffect(() => {
    // Bu, doktor ve hasta verilerini almayı simüle eder. Gerçek dünyada bu bir API çağrısı olabilir.
    const fetchDoctor = async () => {
      const doctor = await fetchDoctorFromApi();
      setCurrentDoctor(doctor);
    };

    const fetchPatient = async () => {
      const patient = await fetchPatientFromApi();
      setCurrentPatient(patient);
    };

    fetchDoctor();
    fetchPatient();
  }, []);

  if (!currentDoctor || !currentPatient) {
    return <div>Loading...</div>;
  }

  return (
    <ChatPatient 
      doctor={currentDoctor} 
      patient={currentPatient} 
      chatId={currentChatId} 
      senderType={senderType} 
    />
  );
}

async function fetchDoctorFromApi() {
  // Örnek doktor verisi
  return { _id: 'doctorId123', name: 'Dr. Smith' };
}

async function fetchPatientFromApi() {
  // Örnek hasta verisi
  return { _id: 'patientId123', name: 'John Doe' };
}

export default ChatParent;
