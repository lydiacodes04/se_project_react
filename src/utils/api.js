const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`, {
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

export { getItems };

//CARD ROUTE: create a card (POST)
function postItems(name, imageUrl, weather) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

export { postItems };

//  Delete card:
function deleteItem(item) {
  return fetch(`${baseUrl}/cards/${item._id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

export { deleteItem };

//in index.js

//later example of API instantiation
// function handleAvatarSubmit({ link }) {
//     avatarEditPopup.renderLoading(true);
//     api
//       .updateAvatar(link)
//       .then(() => {
//         userInfo.setAvatar(link);
//         avatarEditPopup.close();
//       })
//       .catch((err) => {
//         console.error("Error updating avatar:", err);
//       })
//       .finally(() => {
//         avatarEditPopup.renderLoading(false);
//       });
//   }
