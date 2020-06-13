import React, { Component } from "react";
import AddBus from "../views/Buses/AddBus";
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
  const request = fetch(`${URL}/buses`, {
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
    payload: request
  }
}
