export const API_ROOT = 'http://localhost:3000';
export const API_WS_ROOT = `ws://localhost:3000/cable?token=${localStorage.getItem("token")}`;
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
