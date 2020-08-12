import axios from "axios";
import { AsyncStorage } from "AsyncStorage";
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

export async function storeAdminToken(token) {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    console.log(error);
  }
}

export async function getAdminTokenfromStorage() {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      return value
    }
  } catch (error) {
    console.log(error);
  }
}
