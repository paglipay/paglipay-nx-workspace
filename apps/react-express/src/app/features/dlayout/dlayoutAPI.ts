import axios from 'axios';
export async function  fetchDLayout(amount = 1) {
  return await axios.get(`https://jsonplaceholder.typicode.com/users`);
}
