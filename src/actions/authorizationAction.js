import axios from "axios";
const URL = `http://localHost:4000/employee/login`;

export async function getAdminToken(username, password) {
  var body = {
    registrationId: username,
    password: password,
  };

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    let response = await axios.post(URL, body, axiosConfig);
    return {
      type: "GET_TOKEN",
      payload: response,
    };
  } catch (err) {
    console.log("AXIOS ERROR: ", err);
  }
}
