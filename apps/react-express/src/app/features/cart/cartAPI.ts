import axios from 'axios';
export async function fetchCart(amount = 1) {
  return await axios.get(`https://jsonplaceholder.typicode.com/users`);
}
