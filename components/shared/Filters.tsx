'use client'
import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import FilterForm from './FiltersForm'


const Filters = () => {
  return (
    <div>
         <Sheet>
                <SheetTrigger>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  
                </SheetTrigger>

                <SheetContent className='w-64' side={'left'}>
                    <SheetHeader>
                        <SheetTitle>Filtra la tarea que buscas!</SheetTitle>
                    </SheetHeader>
                        <FilterForm />
                </SheetContent>

              </Sheet>
    </div>
  )
}

export default Filters