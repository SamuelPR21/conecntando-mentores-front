import { URL_USERS } from "./urls";

export const getUsers = async () => {
    try{
        const response = await fetch(`${URL_USERS}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'force-cache'
        })
        const data = await response.json()
        const {calatalogo4t} = data;
        return calatalogo4t;
    } catch (err) {
        console.error(err)
    }
}

export const postUsers = async (formData: any) => {
    try {
        const response = await fetch(`${URL_USERS}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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

export const editUser = async (formData: any) => {
    try {
        const response = await fetch(`${URL_USERS}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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

export const getUserById = async (id: string) => {
    try {
        const response = await fetch(`${URL_USERS}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data;
    } catch (err) {
        console.error(err)
    }
}

export const deleteUser = async (id: string) => {
    try {
        const response = await fetch(`${URL_USERS}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data;
    } catch (err) {
        console.error(err)
    }
}