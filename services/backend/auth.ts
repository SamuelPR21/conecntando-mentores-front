import { URL_USERS } from "./urls";


export const postLogin = async (values: any) => {
    try {
      const response = await fetch(`${URL_USERS}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });    
  
      const data = await response.json();
      return data;
      
    } catch (err: any) {
      console.error(err.message)
    }
  }