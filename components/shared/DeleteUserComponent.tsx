'use client';
import React, {useState} from "react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { handleDeleteUser } from "@/actions/users"

import { useRouter } from "next/router";

const DeleteUserComponent = ({user}: DeleteUserProps) => {
    const [deleted, setDeleted] = useState(false);
    const router = useRouter();

    const onDelete = async () => {
        const a = await handleDeleteUser(user.user_id);
        if (a === 'Eliminado'){
            setDeleted(true)
            setTimeout(() => {
                router.reload()
            }, 3000)
        }
    }

return (
    <AlertDialog>
        <AlertDialogTrigger className='text-xs text-red-500'>Eliminar</AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Estas seguro?</AlertDialogTitle>
                <AlertDialogDescription>
                    Vas a eliminar el usuario: {user.username}
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>
                    Cancelar        
                </AlertDialogCancel>
                <AlertDialogAction
                    onClick={onDelete}
                >
                    Si, eliminar
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
)
}

export default DeleteUserComponent