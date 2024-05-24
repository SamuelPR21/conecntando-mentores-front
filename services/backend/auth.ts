'use server';
import { URL_LOGIN} from "./urls";


export const postLogin = async (values: any) => {

    try {
      const response = await fetch(`${URL_LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
  
      const data = await response.json();
      console.log(data)
      return data;
      
    } catch (err: any) {
      console.error(err.message)
    }
}