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
import { X } from "lucide-react";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const DeleteUserComponent = ({user}: DeleteUserProps) => {
    const [deleted, setDeleted] = useState(false);
    const router = useRouter();

    const onDelete = async () => {
        const a = await handleDeleteUser(user.user_id);
        if (a === 'ok'){
            setDeleted(true)
            setTimeout(() => {
                router.refresh()
            }, 3000)
        }
    }

return (
    <AlertDialog>
        <AlertDialogTrigger className='text-xs text-red-500'>Eliminar</AlertDialogTrigger>
        <AlertDialogContent>
            {
                deleted && (
                    <>
                        <div className='bg-green-200 text-green-700 p-2 rounded-md'>
                            Usuario eliminado correctamente
                        </div>
                        <AlertDialogAction className="bg-transparent">
                            Listo, cerrar
                        </AlertDialogAction>
                    </>
                    
                )
            }
            <AlertDialogHeader className="relative">
                <div>
                    <AlertDialogTitle>Estas seguro?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Vas a eliminar el usuario: {user.username}
                    </AlertDialogDescription>
                </div>
                <div>
                    
                </div>
                
                
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>
                    Cancelar        
                </AlertDialogCancel>
                <Button
                    onClick={onDelete}
                >
                    Si, eliminar
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
)
}

export default DeleteUserComponent