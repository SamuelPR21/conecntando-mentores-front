import React from 'react'
import { usersData } from '@/lib/data'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
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
  

const UsersList = () => {
  return (
    <div className='grid grid-flow-row gap-3'>
        {usersData.map(user => (
            <Card 
                className='border bg-transparent flex justify-between gap-4 pr-3 w-full'
                key={user.id}>
                    <div>
                        <CardHeader>
                            <CardTitle
                                className='text-xl lg:text-2xl'
                            >Usuario: {user.name}</CardTitle>
                        </CardHeader>
                        <CardContent className='flex justify-between'>
                            <div>
                                <CardDescription>Carrera: {user.carrera}</CardDescription>
                                <CardDescription>Semestre: {user.semestre}</CardDescription>

                            </div>
                        </CardContent>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-3 '>
                        <Dialog>
                            <DialogTrigger className='text-xs text-green-600'>
                                    Editar
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>
                                        Editar: {user.name}
                                    </DialogTitle>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                        <AlertDialog>
                            <AlertDialogTrigger className='text-xs text-red-500'>Eliminar</AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                <AlertDialogTitle>Estas seguro?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Vas a eliminar el usuario: {user.name}
                                </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                <AlertDialogCancel>
                                    Cancelar        
                                </AlertDialogCancel>
                                <AlertDialogAction>
                                    Si, eliminar
                                </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                    </div>
            </Card>
        ))}
    </div>
  )
}

export default UsersList;