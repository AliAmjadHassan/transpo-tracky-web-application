const URL = `http://165.232.36.159:3000`;

export function getactivesession() {
    const request = fetch(`${URL}/sessions/active-session`, {
      method: "GET",
    }).then((response) => response.json());
    return {
      type: "GET_ACTIVE_SESSION",
      payload: request,
    };
  }