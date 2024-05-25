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

      //Si manda un status, es un error de validación o de servidor
      if(data.status) {
        return {error: data.status};
      } else {
        return data;
      }
      
      
    } catch (err: any) {
      console.error(err.message)
    }
}