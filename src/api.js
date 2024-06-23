const API_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';

const getPatientData = async () => {
  const auth = btoa('coalition:skills-test');
  try {
    const response = await fetch(API_URL, {
      headers: {
        'Authorization': `Basic ${auth}`
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching patient data:', error);
    throw error;
  }
};
export default getPatientData