'use server'
import { postUsers, editUser, deleteUser } from "@/services/backend/users"


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
    try {
        const response = await editUser(formData)
        return response;
    } catch (err: any) {
        console.error(err.message)
        return {error: err.message}
    }
}

export const handleDeleteUser = async (formData: any) => {
    try {
       const response = await deleteUser(formData);
        return response;
    } catch (err: any) {
        console.error(err.message)
        return {error: err.message}
    }
}
