const URL = `http://localHost:4000`;

export function getactivesession() {
    const request = fetch(`${URL}/sessions/active-session`, {
      method: "GET",
    }).then((response) => response.json());
    return {
      type: "GET_ACTIVE_SESSION",
      payload: request,
    };
  }