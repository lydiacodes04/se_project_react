const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr4me.justlearning.net"
    : "http://localhost:3001";

// const headers = { "Content-Type": "application/json" };

const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: "Bearer " + localStorage.getItem("jwt"),
});

import { checkResponse } from "./api";

function signUp(email, password, name, avatarUrl) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ email, password, name, avatarUrl }),
  }).then(checkResponse);
}
export { signUp };

function signIn(email, password) {
  return fetch(`${baseUrl}/signIn`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}
export { signIn };

function verifyUser(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export { verifyUser };

function updateProfile(name, avatarUrl) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: getHeaders(),
    body: JSON.stringify({
      name,
      avatar: avatarUrl,
    }),
  }).then(checkResponse);
}

export { updateProfile };
