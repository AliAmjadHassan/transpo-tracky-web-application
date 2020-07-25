const URL = `http://localHost:4000`;

export function busList() {
  const request = fetch(`${URL}/buses`, { method: "GET" }).then((response) =>
    response.json()
  );
  return {
    type: "BUS_LIST",
    payload: request,
  };
}

export function addNewBus(values, cb) {
  // console.log("Values from AddBus",values)
  fetch(`${URL}/buses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  }).then(() => cb());
  return {
    type: "ADD_BUS",
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
