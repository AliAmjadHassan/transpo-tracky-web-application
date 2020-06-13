import React, { Component } from "react";
import AddBus from "../views/Buses/AddBus";
const URL = `http://localHost:4000`;
const id = 1;

export function BusList() {
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

export function searchBus(keywords) {
  const request = fetch(`${URL}/buses?q=${keywords}`, { method: "GET" });
  return {
    type: "SEARCH_BUS",
    payload: request,
  };
}

export function editbus(values) {
  // const request =  fetch(`${URL}/buses/:1`, {
  //   method: "PUT",
  //   body: JSON.stringify(values),
  // })
  //   .then
  //   console.log('Bus was updated');

  return {
    type: "EDIT_BUS",
    payload: "everything went fine",
  };
}
