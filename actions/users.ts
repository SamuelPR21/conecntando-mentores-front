'use server'
import { postUsers, editUser, deleteUser, postAdmin } from "@/services/backend/users"
import { getUserById } from "@/services/backend/users";
// import { postLogin } from "@/services/backend/auth"
import { setCookies } from "@/utils/cookies"

import { cookies } from "next/headers";

function valuesFromCookies() {
    const cookiesStore = cookies();
    const token = cookiesStore.get('token')?.value as string;
    return token;
}




//Metodos de login
export const handleLoginUser = async (formData: any) => {
    try {
        const a = await setCookies(formData);
        if(a.error){
            
            return a.error;
        }

        return a;
    } catch (err: any) {
        console.error(err.message)
        return {error: err.message}
    }
}

//Metodos de register
export const handleCreateUser = async (formData: any) => {
    try {
        const response = await postUsers(formData)
        if(response === 'Creado'){
            return true;
        }
        return response;
       
    } catch (err: any) {
        console.error(err.message)
        return {error: err.message}
    }
}
export const handleCreateAdmin = async (formData: any) => {
    try {
        const response = await postAdmin(formData)
        if(response === 'User registered successfully!'){
            return true;
        }
        return response;
       
    } catch (err: any) {
        console.error(err.message)
        return {error: err.message}
    }

}

export const handleEditUser = async (formData: any, id: string) => {
    const token = valuesFromCookies();
    try {
        const response = await editUser(formData, token, id)
        if (response.error) {
            return response.error;
        } else {
            return true;
        }
    } catch (err: any) {
        console.error(err.message)
        return {error: err.message}
    }
}

export const handleDeleteUser = async (id: string) => {
    const token = valuesFromCookies();
    try {
       const response = await deleteUser(token, id);
        return response;
    } catch (err: any) {
        console.error(err.message)
        return {error: err.message}
    }
}
