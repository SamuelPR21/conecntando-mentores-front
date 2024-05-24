'use server'
import { postUsers, editUser, deleteUser } from "@/services/backend/users"
import { getUserById } from "@/services/backend/users";
// import { postLogin } from "@/services/backend/auth"
import { setCookies } from "@/utils/cookies"

import { cookies } from "next/headers";

function valuesFromCookies() {
    const cookiesStore = cookies();
    const token = cookiesStore.get('token')?.value as string;
    // const userString = cookiesStore.get('user')?.value;
    // const userObject = userString ? JSON.parse(userString) : {id: 2};
    // const {id} = userObject;
    return {token}
}



//Metodos de login
export const handleLoginUser = async (formData: any) => {
    try {
        const a = await setCookies(formData);
        console.log('El rol debe ser: ', a);


        // if(a === true){
            
        //     return true;
        // }
    } catch (err: any) {
        console.error(err.message)
        return {error: err.message}
    }
}

//Metodos de register

export const handleCreateUser = async (formData: any) => {
    try {
        const response = await postUsers(formData)
        return response;
       
    } catch (err: any) {
        console.error(err.message)
        return {error: err.message}
    }
}

export const handleEditUser = async (formData: any) => {
    const token = valuesFromCookies;
    try {
        const response = await editUser(formData, token)
        return response;
    } catch (err: any) {
        console.error(err.message)
        return {error: err.message}
    }
}

export const handleDeleteUser = async (formData: any) => {
    const token = valuesFromCookies;
    try {
       const response = await deleteUser(formData, token);
        return response;
    } catch (err: any) {
        console.error(err.message)
        return {error: err.message}
    }
}
