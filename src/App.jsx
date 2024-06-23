import React from 'react'
import getPatientData from './api'
import { useState,useEffect } from 'react';
import Header from './Components/Header';
import Patientsearch from './Components/Patientsearch';
import Diaghistory from './Components/Diaghistory';
import Diaglist from './Components/Diaglist';
import Patient from './Components/Patient';
import Labresult from './Components/Labresult';

function App() {
  const [patient, setPatient] = useState(null);
  const [Loading,setLoading]=useState(true)
  const [error, setError] = useState(null);
  const [allPatients,setallPatients]=useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPatientData();
        const jessicaData = data.find(patient => patient.name === 'Jessica Taylor');
        setPatient(jessicaData);
        setallPatients(data);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
    {!Loading && 
        <div className='bg-[#F6F7F8] h-screen p-sccreen pt-6 px-10 '>
        <Header/>
        <div className='flex mt-6 justify-between w-full h-[85vh] gap-10'>
          <Patientsearch allPatients={allPatients}/>
          <div className='w-1/2'>
            <Diaghistory diagnosis_history={patient.diagnosis_history}/>
            <Diaglist diagnostic_list={patient.diagnostic_list}/>
          </div>
          <div className='w-1/4'>
          <Patient patient={patient}/>
          <Labresult lab_results={patient.lab_results}/>
          </div>
        </div>
        </div>
    }
    </>   
  )
}

export default App