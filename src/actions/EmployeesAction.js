const URL = `http://localHost:4000`;

export function getAllEmployees(token) {
  console.log("Bearer" + token);
  const request = fetch(`${URL}/employee/fetch-all-employees`, {
    method: "GET",
    headers: {
      authorization: "Bearer " + token,
    },
  }).then((response) => response.json());
  return {
    type: "ALL_EMPLOYEES",
    payload: request,
  };
}

export function addNewEmployees(values, cb) {
  console.log("Values from AddBus", values);
  fetch(`${URL}/employee/signup`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      connection: "keep-alive",
    },
    body: JSON.stringify(values),
  }).then(() => cb());
  return {
    type: "ADD_EMPLOYEE",
    payload: "everything went fine",
  };
}

export function updateBus(values, id, cb) {
  // console.log("Values from Index",values,id,"URL From index",`${URL}/buses/${id}`)
  fetch(`${URL}/buses/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  }).then(() => cb());
  return {
    type: "UPDATE_BUS",
    payload: "Bus was Updated",
  };
}

// export function searchBus(id) {
//   const request = fetch(`${URL}/buses/${id}`, {
//     method: "GET",
//   }).then((response) => response.json());
//   return {
//     type: "SEARCH_BUS",
//     payload: request,
//   };
// }

export function clickedBusFunction(id) {
  const request = fetch(`${URL}/buses/${id}`, {
    method: "GET",
  }).then((response) => response.json());
  return {
    type: "CLICKED_BUS",
    payload: request,
  };
}

export function deleteBus(id, cb) {
  const request = fetch(`${URL}/buses/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => cb());
  return {
    type: "DELETE_BUS",
    payload: "Bus was deleted",
  };
}

export function clearClickedBus() {
  return {
    type: "CLEAR_CLICKED_BUS",
    payload: {},
  };
}
