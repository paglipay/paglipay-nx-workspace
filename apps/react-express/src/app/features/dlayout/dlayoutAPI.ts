import axios from 'axios';
import data from './data';
import data2 from './data2';
console.log('data---: ', data);
export async function fetchDLayout(amount = 1) {
  if (amount === 1) {
    return new Promise<{ data: any }>((resolve) =>
      setTimeout(() => resolve(data()), 1000)
    );
  } else {
    return new Promise<{ data: any }>((resolve) =>
      setTimeout(() => resolve(data2()), 1000)
    );
  }
}
