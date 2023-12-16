
import axios from "axios";
import urlBase from './urlBase.js';

export async function getFunctionPets() {
  try {
    const response = await axios.get(`${urlBase}pets/get`);
    console.log(response.data);
    console.log(typeof response.data);
    return response.data.pets;
  } catch (err) {
    console.log('Erro ao puxar dados', err);
    throw err;
  }

}

