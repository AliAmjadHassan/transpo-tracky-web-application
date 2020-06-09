const URL = `http://localHost:3000`;

export function BusList() {
  const request = fetch(`${URL}/buses`, { method: "GET" }).then((response) =>
    response.json()
  );
  return {
    type: "BUS_LIST",
    payload: request,
  };
}

export function addNewBus(values) {
  const request =  fetch(`${URL}/buses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then
    console.log('Bus was added');

  return {
    type: "ADD_BUS",
    payload: "everything went fine",
  };
}
