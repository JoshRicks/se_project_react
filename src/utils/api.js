import { checkResponse } from "./constants";

const baseUrl = "http://localhost:3001";
const headers = {
  authorization: `Content-Type": "application/json`,
};

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function createNewCard({ imageUrl, name, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(checkResponse);
}

function deleteCard(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
}

export { getItems, createNewCard, deleteCard };
