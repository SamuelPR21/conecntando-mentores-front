'use client';
import React, {useState, useEffect} from 'react'
import { handleCreateUser, handleLoginUser } from '@/actions/users';

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
        .min(8, "La contraseña debe tener al menos 8 caracteres.")
        .refine(password => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password), {
            message: "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número.",
        })
        ,
    // newPassword: z.string().optional(),
    // rememberMe: z.boolean().optional(),
    
});


//The form

const AuthForm = ({type}: AuthFormProps) => {
    console.log(type)
    const [error, setErrorForm] = useState('')
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    //Defining the form
    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: defaultValuesAuthForm,
    })

    //Validate if password fields' values are the same

    // const {setError, watch, clearErrors } = form;
    // const password = watch('password');
    // const newPassword = watch('newPassword');

    //Watchers
    // useEffect(() => {
    //     if (type === 'register' && password !== newPassword) {
    //       setError('newPassword', {
    //         type: 'mismatch',
    //         message: 'Las contraseñas no coinciden',
    //       });
    //     } else {
    //       clearErrors('newPassword');
    //     }
    //   }, [password, newPassword, setError, clearErrors, type]);

    
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof authFormSchema>) {
        setDisabled(true)
        setLoading(true)
        //HandleSubmit para cuando usuario se logueará
        if(type === 'login' || type === 'login-admin') {
            try {
                const { password } = values;
                const dataBackend = {username: values.username, user_password: password}
                if(type === 'login'){
                    const data = await handleLoginUser(dataBackend);
                    if(data === true){
                        router.push('/trabajos')
                    }
                } else {
                    const data = await handleLoginUser(dataBackend);
                    if(data === true){
                        router.push('/imadmin')
                    }
                }
                
                
                // console.log('Data final al recibir el formulario:', data)
                // if(data === `Unexpected token '<', "<!DOCTYPE "... is not valid JSON`){
                //     setErrorForm('Este correo ya está en uso!')
                // } else if(data === 'fetch failed'){
                //     setErrorForm('Servidor no responde!')
                // } else {
                //     router.push('/')
                // }
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
                console.log('User registrado: ', {values})
                try {
                    const data = await handleCreateUser(values);
                    console.log('Data final al recibir el formulario:', data)
                    if(data === `Unexpected token '<', "<!DOCTYPE "... is not valid JSON`){
                        setErrorForm('Este correo ya está en uso!')
                    } else if(data === 'fetch failed'){
                        setErrorForm('Servidor no responde!')
                    } else {
                        router.push('/')
                    }
                } catch (err){
                    console.error(err)
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