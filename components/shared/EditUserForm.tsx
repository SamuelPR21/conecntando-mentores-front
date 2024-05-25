'use client';
import React, {useState, useEffect} from 'react'
import { handleCreateUser, handleEditUser, handleLoginUser } from '@/actions/users';

//Shadcn staff for forms
import { zodResolver } from "@hookform/resolvers/zod"
import {  useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

//UI needed
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"
import Loading from "./Loading"


import { useRouter } from 'next/navigation';



export const editFormSchema = z.object({
    username: z.string({ required_error: "El campo 'Nombre' no puede estar vacío." }).optional(),
    user_name: z.string({ required_error: "El campo 'email' no puede estar vacío." }).optional(),
    user_apellido: z.string({ required_error: "El campo 'email' no puede estar vacío." }).optional(),
});


//The form

const EditUserForm = ({data}: EditUserProps) => {
   
    const [error, setErrorForm] = useState('')
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [created, setCreated] = useState(false);

    const router = useRouter();


    const initialValues = {
        username: data?.username,
        user_name: data?.user_name,
        user_apellido: data?.user_apellido,       
    }

    //Defining the form
    const form = useForm<z.infer<typeof editFormSchema>>({
        resolver: zodResolver(editFormSchema),
        defaultValues: initialValues,
    })

    
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof editFormSchema>) {
        setDisabled(true)
        setLoading(true)
        //HandleSubmit para editar usuario
        
            console.log('values: ', values)
            console.log('User registrado: ', data.user_id )
            try {
                const response = await handleEditUser(values, data.user_id);
                console.log("Respuesta:", response)
                if(response === true){
                    setCreated(true)
                    setTimeout(() => {
                        router.refresh();
                    }, 3000);
                    
                }
            } catch (err){
                console.error(err)
            }
            form.reset();
        
        

        setLoading(false)
        setDisabled(false)
        
    }
  
return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} action="">
            <div className="w-4/5 mx-auto flex-row items-center justify-center">
               
                {error && (
                    <div className="w-full mt-6 bg-red-200 p-2 text-center text-red-700">
                        {error}
                    </div>
                )}
                { created && (
                    <div className="w-full mt-6 bg-green-200 p-2 text-center text-green-700">
                        Usuario editado con exito!
                    </div>
                )

                }

                
                    <>
                        <FormField
                            control={form.control}
                            name='user_name'
                            render={({ field }) => (
                                <FormItem className="w-full mt-6" >
                                    <FormLabel> Nombre real</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="text" onFocus={() => setErrorForm('')}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='user_apellido'
                            render={({ field }) => (
                                <FormItem className="w-full mt-6" >
                                    <FormLabel> Apellido</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="text" onFocus={() => setErrorForm('')}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </>
                    

                <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem className="w-full mt-6" >
                            <FormLabel> Nombre de usuario</FormLabel>
                            <FormControl>
                                <Input 
                                    onFocus={() => setErrorForm('')}
                                    {...field} 
                                    type="text"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

            </div>

            {loading && <Loading />}

            <div className="flex justify-center mt-8">
                <Button 
                    disabled={disabled}
                    type="submit" 
                    variant='secondary' 
                    className={`w-3/5 font-bold 
                        ${!disabled ? 'bg-gray-400' : 'bg-[#2c2c2c]'}
                    `}
                >
                    Editar
                </Button>
            </div>
        </form>
    </Form>
)
}

export default EditUserForm;