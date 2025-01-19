import axios from 'axios';

const API_ENDPOINT = import.meta.env.VITE_APP_SERVER_LINK;

export const submitUserInput = async (formData) => {
  try {
    console.log("got the time", formData)
    const [year, month, day] = formData.dob.split('-');
    const [hrs, mins] = formData.time.split(':');
    const sec = '00';

    const payload = {
      name: formData.name,
      gender: formData.gender,
      day: day,
      month: month,
      year: year,
      hrs: hrs,
      mins: mins,
      sec: sec,
      place: formData.location
    };
    const response = await axios.post(API_ENDPOINT, payload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log("response received", response.data.data[0].text);
    return response.data.data[0].text;
  } catch (error) {
    console.error('Error submitting the form:', error);
    throw error;
  }
};
