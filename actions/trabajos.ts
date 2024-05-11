'use server'
// import { createAccessToken } from "@/utils/auth/createAccessToken"
// import { setUserId } from "@/utils/auth/setUserId"
// import { validateAccessToken } from "@/utils/auth/validateAccessToken"
import { getTrabajoById, getTrabajos, postTrabajo } from "@/services/backend/trabajos"


export const handleCreateTrabajo = async (formData: any) => {
    try {
       const result = await postTrabajo(formData);
    } catch (err: any) {
        console.error(err.message)
        return {error: err.message}
    }
}


