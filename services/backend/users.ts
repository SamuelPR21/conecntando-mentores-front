import { URL_USERS } from "./urls";
import { URL_REGISTER } from "./urls";

export const postAdmin = async (formData: any) => {
    try {
        const response = await fetch(`${URL_REGISTER}admin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const data = await response.text()
        return data;

    } catch (err: any) {
        console.error(err.message)
        return {error: err.message}
    }
}


export const getUsers = async (token: any) => {
    try{
        const response = await fetch(`${URL_USERS}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            cache: 'no-cache'
        })
        const data = await response.json();
        return data;
        
    } catch (err) {
        console.error(err)
    }
}

export const postUsers = async (formData: any) => {
    try {
        const response = await fetch(`${URL_REGISTER}user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const data = await response.text()
        return data;

    } catch (err: any) {
        console.error(err.message)
        return {error: err.message}
    }
}

export const editUser = async (formData: any, token: any, id: string) => {
    try {
        const response = await fetch(`${URL_USERS}/editar/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json()
        return data;
    } catch (err: any) {
        console.error(err.message)
        return {error: err.message}
    }
}

export const getUserById = async (id: string, token: any) => {
    try {
        const response = await fetch(`${URL_USERS}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data;
    } catch (err) {
        console.error(err)
    }
}

export const deleteUser = async (token: any, id: string) => {
    try {
        const response = await fetch(`${URL_USERS}${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data;
    } catch (err) {
        console.error(err)
    }
}