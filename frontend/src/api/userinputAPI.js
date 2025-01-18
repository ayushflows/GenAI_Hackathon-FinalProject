import axios from 'axios';

const API_ENDPOINT = 'https://your-api-endpoint.com';

export const submitUserInput = async (formData) => {
  try {
    // Parse the date and time for separate fields
    const [year, month, day] = formData.dob.split('-');
    const [hrs, mins] = formData.time.split(':');
    const sec = '00'; // Assuming seconds are not included in the input

    // Create the payload in the required format
    const payload = {
      input_name: formData.name,
      input_gender: formData.gender,
      input_day: day,
      input_month: month,
      input_year: year,
      input_hrs: hrs,
      input_mins: mins,
      input_sec: sec,
      input_place: formData.location,
      input_ayanamsa: 'N.C.Lahiri',
      input_charting: 'North Indian',
    };
    
    await new Promise((resolve) => setTimeout(resolve, 4000));

    // Send the data to the API
    const response = await axios.post(API_ENDPOINT, payload);
    return response.data;
  } catch (error) {
    console.error('Error submitting the form:', error);
    throw error;
  }
};
