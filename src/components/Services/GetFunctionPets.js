
import axios from "axios";
import urlBase from './urlBase.js';

export async function getFunctionPets() {
  try {
    const response = await axios.get(`${urlBase}pets/get`);
    const dataConverted = JSON.parse(response.data);
    return dataConverted;
  } catch (err) {
    console.log('Erro ao puxar dados', err);
    throw err;
  }

}

