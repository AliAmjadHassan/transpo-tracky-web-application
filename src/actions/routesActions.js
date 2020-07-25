import axios from "axios";

const URL = `http://localHost:4000`;

export function mapFunction(values) {
  let newArray = Object.values(values);
  console.log("values", values, "Array", newArray);
  return {
    type: "MAP_Co_ORDINATE",
    payload: values,
  };
}

export function addNewRoute(values,cb) {
  let newsessionvalues = {
    name: values.name,
    dropOffTime: values.dropOffTime,
    liveStatus: values.liveStatus,
    pickUpTime: values.pickUpTime,
    session: JSON.parse(values.session),
    stopList: values.stopList,
  };
  console.log("Values from action", newsessionvalues);
  fetch(`${URL}/routes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newsessionvalues),
  }).then(()=>cb());
  return {
    type: "ADD_ROUTE",
    payload: "everything went fine",
  };
}

export function viewRoutes() {
  const request = fetch(`${URL}/routes`, { method: "GET" }).then((response) =>
    response.json()
  );
  return {
    type: "ROUTES_LIST",
    payload: request,
  };
}


export function updateRoute(values, id, cb) {
  // console.log("Values from Index",values,id,"URL From index",`${URL}/buses/${id}`)
  fetch(`${URL}/routes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  }).then(()=>cb());
  return {
    type: "UPDATE_ROUTE",
    payload: "Route was Updated",
  };
}

// export async function routeToUpdate(id) {
//   try {
//     const request = await axios.get(`${URL}/routes/${id}`);
//     return {
//       type: "ROUTE_TO_UPDATE",
//       payload: request,
//     };
//   } catch (err) {
//     return err;
//   }
// }

export function routeToUpdate(id) {
  const request = fetch(`${URL}/routes/${id}`, {
    method: "GET",
  }).then((response) => response.json());
  return {
    type: "ROUTE_TO_UPDATE",
    payload: request,
  };
}

export function deleteRoute(id, cb) {
  const request = fetch(`${URL}/routes/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(()=>cb());
  return {
    type: "DELETE_ROUTE",
    payload: "Bus was deleted",
  };
}