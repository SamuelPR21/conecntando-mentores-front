'use server';
import { postLogin } from "@/services/backend/auth"

import { cookies } from "next/headers"

export const setCookies = async (formData: any) => {
    const cookiesStore = cookies()
    
    const data = await postLogin(formData);

    //Si el servidor no responde o está apagado
    if(!data){
        throw new Error('Servidor no responde!')
    }


    if (!data.error) {
        try {
            const {userId, token, Rol} = data;
            cookiesStore.set('token', token, {
                path: '/',
                sameSite: 'strict',
            })
            cookiesStore.set('user', userId, {
                path: '/',
                sameSite: 'strict',
            })

            //Aqui devuelvo el rol
            return Rol;
            
        } catch (err) {
            throw new Error('Error al guardar las cookies') 
        }
        
    } else {
        return {error: data.error}
    }
    // return data;

}

export const deleteCookies = async () => {
    const cookiesStore = cookies();
    try {
        cookiesStore.delete('token')
        cookiesStore.delete('user')
        return true;  
    } catch (error) {
        console.error(error);
    }
    
}