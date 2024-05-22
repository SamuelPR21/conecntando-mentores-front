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

import UploadForm from "./UploadForm"

const AddTrabajo = () => {
  return (
    <div>
        <Dialog>
            <DialogTrigger className="border rounded-md px-4 py-2">
                    Subir +
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
                   <UploadForm />
            
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddTrabajo