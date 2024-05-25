import React from 'react'
import Link from 'next/link'
import { cookies } from 'next/headers'
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
    DialogClose,
    DialogTrigger,
  } from "@/components/ui/dialog"
import DeleteUserComponent from './DeleteUserComponent'
import EditUserForm from './EditUserForm'
import { getUsers } from '@/services/backend/users'
import { handleDeleteUser } from '@/actions/users'
  

const UsersList = async () => {
    const cookiesStore = cookies();
    const token = cookiesStore.get('token')?.value as string;
    const usersData: User[] =  await getUsers(token);

  return (
    <div className='grid grid-flow-row gap-3'>
        {usersData.map(user => (
            <Card 
                className='border bg-transparent flex justify-between gap-4 pr-3 w-full'
                key={user.user_id}>
                    <div>
                        <CardHeader>
                            <CardTitle
                                className='text-xl lg:text-2xl'
                            >Usuario: {user.username}</CardTitle>
                        </CardHeader>
                        <CardContent className='flex justify-between'>
                            <div>
                                <CardDescription>Nombre: {user.user_name}</CardDescription>
                                <CardDescription>Apellido: {user.user_apellido}</CardDescription>

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
                                    <DialogClose>

                                    </DialogClose>
                                    <DialogTitle>

                                        Editando: {user.username}
                                    </DialogTitle>
                                </DialogHeader>
                                <EditUserForm data={user} />
                            </DialogContent>
                        </Dialog>

                        <DeleteUserComponent 
                            user={user}
                        />
                    </div>
            </Card>
        ))}
    </div>
  )
}

export default UsersList;