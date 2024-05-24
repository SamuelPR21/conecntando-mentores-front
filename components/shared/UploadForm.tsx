'use client';
import React, {useState, useEffect} from 'react'

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

  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

//UI needed
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"
import Loading from "./Loading"

import {defaultValuesUploadForm} from "@/lib/utils"
import { useRouter } from 'next/navigation';
import { Textarea } from '../ui/textarea';


export const authFormSchema = z.object({
    title: z.string({ required_error: "El campo 'Titulo' no puede estar vacío." }),
    content: z.string({ required_error: "El campo 'Fecha' no puede estar vacío." }),
    materia: z.string({ required_error: "El campo 'Materia' no puede estar vacío." }),
});


//The form

const UploadForm = () => {
    const [error, setErrorForm] = useState('')
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);


    //Defining the form
    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: defaultValuesUploadForm,
    })
    
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof authFormSchema>) {
        setDisabled(true)
        
        //HandleSubmit para cuando usuario se logueará
            if (!Object.values(values).every(value => value)) {
                setErrorForm('Todos los campos son requeridos');
            } else {
                console.log('Tarea subida: ', {values})
                setSuccess(true)
                form.reset(defaultValuesUploadForm);
            }
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

                {success && (
                <>
                    <div className="mx-auto w-4/5 mt-6 hidden md:block">
                        <p className="bg-green-200 p-2 text-center text-green-700">
                            Trabajo enviado!
                        </p>
                    </div>
                </>
                )}
                
                    <FormField
                        control={form.control}
                        name='title'
                        render={({ field }) => (
                            <FormItem className="w-full mt-6" >
                                <FormLabel> Titulo de la tarea</FormLabel>
                                <FormControl>
                                    <Input {...field} type="text" onFocus={() => setErrorForm('')}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='materia'
                        render={({ field }) => (
                            <FormItem className="w-full mt-6" >
                                <FormLabel> Qué materia?</FormLabel>
                                <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecciona la materia" />
                                    </SelectTrigger>
                                    <SelectContent>
                                            <SelectItem   
                                                value={'Calculo 1'}
                                            >
                                                Calculo 1
                                            </SelectItem>
                                            <SelectItem   
                                                value={'Calculo 2'}
                                            >
                                                Calculo 2
                                            </SelectItem>
                                            <SelectItem   
                                                value={'Fisica 1'}
                                            >
                                                Fisica 1
                                            </SelectItem>
                                            <SelectItem   
                                                value={'Fisica 2'}
                                            >
                                                Fisica 2
                                            </SelectItem>
                                            <SelectItem   
                                                value={'Programacion web'}
                                            >
                                                Programación Web
                                            </SelectItem>
                                        
                                    </SelectContent>
                                </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                
                

                

               <FormField
                    control={form.control}
                    name='content'
                    render={({ field }) => (
                        <FormItem className="w-full mt-6" >
                            <FormLabel>Contenido</FormLabel>
                            <FormControl>
                                <Textarea 
                                    {...field} 
                                    onFocus={() => setErrorForm('')}
                                    className="w-full h-64 p-2 border rounded"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


            </div>

            {loading && <Loading />}
            {success && (
                <>
                    <div className="mx-auto w-4/5 mt-6 block md:hidden">
                        <p className="bg-green-200 p-2 text-center text-green-700">
                            Trabajo enviado!
                        </p>
                    </div>
                </>
            )}

            <div className="flex justify-center mt-8">
                <Button 
                    disabled={disabled}
                    type="submit" 
                    variant='secondary' 
                    className={`w-3/5 font-bold 
                        ${!disabled ? 'bg-gray-400' : 'bg-[#2c2c2c]'}
                    `}
                >
                    Subir trabajo
                </Button>
            </div>
        </form>
    </Form>
)
}

export default UploadForm;