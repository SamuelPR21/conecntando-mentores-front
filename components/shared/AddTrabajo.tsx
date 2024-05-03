import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { Textarea } from "../ui/textarea"
import React from 'react'
import { Button } from "../ui/button"
import {Input} from '../ui/input'

const AddTrabajo = () => {
  return (
    <div>
        <Dialog>
            <DialogTrigger>
                <Button
                    variant={'outline'}
                    className='bg-transparent'
                >
                    Subir +
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Crear nuevo trabajo
                    </DialogTitle>
                    <DialogDescription>
                        Llena los campos para crear un nuevo trabajo
                    </DialogDescription>
                </DialogHeader>
                    <form>
                        <label htmlFor="title">Título</label>
                        <Input type="text" id="title" />
                        <label htmlFor="description">Tarea</label>
                        <Textarea />
                    </form>
            
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddTrabajo