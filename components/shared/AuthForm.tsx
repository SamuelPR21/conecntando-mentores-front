'use client';
import React, {useState, useEffect} from 'react'
import { handleCreateAdmin, handleCreateUser, handleLoginUser } from '@/actions/users';

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

import {defaultValuesAuthForm} from "@/lib/utils"
import { useRouter } from 'next/navigation';
import { postLogin } from '@/services/backend/auth';



export const authFormSchema = z.object({
    username: z.string({ required_error: "El campo 'Nombre' no puede estar vacío." }),
    user_name: z.string({ required_error: "El campo 'email' no puede estar vacío." }).optional(),
    user_apellido: z.string({ required_error: "El campo 'email' no puede estar vacío." }).optional(),
    password: z.string()
        .min(6, "La contraseña debe tener al menos 8 caracteres."),
    // newPassword: z.string().optional(),
    // rememberMe: z.boolean().optional(),
    
});


//The form

const AuthForm = ({type}: AuthFormProps) => {
    //Estados de React
    const [error, setErrorForm] = useState('')
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [created, setCreated] = useState(false);

    const router = useRouter();

    //Defining the form
    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: defaultValuesAuthForm,
    })


    
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof authFormSchema>) {
        setDisabled(true)
        setLoading(true)
        //HandleSubmit para cuando usuario se logueará
        if(type === 'login' || type === 'login-admin') {
            const {user_name, user_apellido, ...rest} = values;
            if (!Object.values(rest).every(value  => value)) {
                setErrorForm('Todos los campos son requeridos');
                setLoading(false)
                setDisabled(false)
                return;
            }
            try {
                const { password } = values;
                const dataBackend = {username: values.username, user_password: password}
                if(type === 'login' || type === 'login-admin'){
                    const data = await handleLoginUser(dataBackend);
                    console.log('Data final al recibir el formulario:', data)
                    if(data === 'ROLE_USER'){
                        router.push('/trabajos')
                    }
                    if(data === 'ROLE_ADMIN'){
                        router.push('/imadmin')
                    }
                    if (data === 401) {
                        setErrorForm('Usuario o contraseña incorrectos')
                    }
                } 
                
            } catch (err){
                console.error(err)
            }
        }

        //HandleSubmit para cuando usuario se registrará
        else {
            
            // const { password, ...rest} = values;
            if (!Object.values(values).every(value  => value)) {
                setErrorForm('Todos los campos son requeridos');
            } else {
                if(type === 'register' ){
                    console.log('User registrado: ', {values})
                    try {
                        const data = await handleCreateUser(values);
                        if(data === true){
                            setCreated(true);
                            setTimeout(() => {
                                router.push('/login?role=user')
                            }, 4000)  
                        }
                    } catch (err){
                        console.error(err)
                    }
                } else {
                    console.log('User registrado: ', {values})
                    try {
                        const data = await handleCreateAdmin(values);
                        if(data === true){
                            setCreated(true);
                            setTimeout(() => {
                                router.push('/login?role=user')
                            }, 4000)  
                        } else {
                            console.log("Error en el response:", data)
                        }   
                    } catch (err){
                        console.error(err)
                    }
                }
                form.reset();
            }
            
        }
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
                        Usuario creado exitosamente!Serás redireccionado a la página de inicio de sesión....
                    </div>
                )

                }

                {(type === 'register' || type === 'register-admin') && (
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
                    
                )}

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

                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem className="w-full mt-6" >
                            <FormLabel> Contraseña</FormLabel>
                            <p className="text-xs ">
                                La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número.
                            </p>
                            <FormControl>
                                <Input 
                                    {...field} 
                                    onFocus={() => setErrorForm('')}
                                    type="password" 
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* {(type === 'register' || type === 'register-admin') && (
                    <FormField
                        control={form.control}
                        name='newPassword'
                        render={({ field }) => (
                            <FormItem className="w-full mt-6" >
                                <FormLabel> Repite tu contraseña</FormLabel>
                                <FormControl>
                                    <Input {...field} type="password"  onFocus={() => setErrorForm('')}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )} */}
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
                    {(type === 'login' || type === 'login-admin') ? 'Inicio' : 'Registrar'}
                </Button>
            </div>
        </form>
    </Form>
)
}

export default AuthForm