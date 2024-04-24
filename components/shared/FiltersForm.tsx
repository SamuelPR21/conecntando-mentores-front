'use client';
import React, {useState, useEffect} from 'react'

//Shadcn staff for forms
import { zodResolver } from "@hookform/resolvers/zod"
import {  useForm } from "react-hook-form"
import { z } from "zod"
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

//UI needed
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"
import Loading from "./Loading"

// import {defaultValuesFilterForm} from "@/lib/utils"
import { useRouter } from 'next/navigation';
import { materiasData } from '@/lib/data';


export const filterFormSchema = z.object({
    materia: z.string({ required_error: "El campo 'Nombre' no puede estar vacío." }),
    fecha: z.string({ required_error: "El campo 'email' no puede estar vacío." }),

});


//The form

const FilterForm = () => {
    const [error, setErrorForm] = useState('')
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    //User data
    // const {setUserId} = useUserData()
    //Router
    const router = useRouter()

    //Defining the form
    const form = useForm<z.infer<typeof filterFormSchema>>({
        resolver: zodResolver(filterFormSchema),
        defaultValues: {materia: '', fecha: ''},
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
    //   }, [password, newPassword, setError, clearErrors]);

    
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof filterFormSchema>) {
        setDisabled(true)
        setLoading(true)
        //HandleSubmit para cuando usuario se logueará
     
            if (!Object.values(values).every(value => value)) {
                setErrorForm('Todos los campos son requeridos');
            } else {
                console.log('Intento de login con: ', {values})
                setTimeout(() => {
                    router.push('/trabajos')
                }, 2000)
                // try {
                    
                //     const data = await handleLogin(values)
                    

                //     if (!data.error){
                //         // setUserId(data.id)
                //         router.push('/dashboard')
                //     } else {
                //        const errMessage = errorHandlerAuthForm(data.error);
                //        setErrorForm(errMessage as string);                    
                //     }
                //     form.reset();
                // } catch (err){
                //     console.error('No se pudo llamar el handleLogin')
                // }
            }
            
        setLoading(false)
        setDisabled(false)
        
    }
  

return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} action="">
            <div className="w-4/5 mx-auto flex-row items-center justify-center">
                {/* {error && (
                    <div className="w-full mt-6 bg-red-200 p-2 text-center text-red-700">
                        {error}
                    </div>
                )} */}
                
                    <FormField
                        control={form.control}
                        name='materia'
                        render={({ field }) => (
                            <FormItem className="w-full mt-6" >
                                <FormLabel> Materia</FormLabel>
                                <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Materia" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {materiasData.map((materia) => (
                                            <SelectItem key={materia.id} value={materia.name}>
                                                {materia.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
            
                <FormField
                    control={form.control}
                    name='fecha'
                    render={({ field }) => (
                        <FormItem className="w-full mt-6" >
                            <FormLabel> Fecha de entrega</FormLabel>
                            <FormControl>
                               <Input {...field} type='date'/>
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
                    Buscar tarea 🚀
                </Button>
            </div>
        </form>
    </Form>
)
}

export default FilterForm