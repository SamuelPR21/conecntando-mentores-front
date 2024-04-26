import React from 'react'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {cardsData} from "@/lib/data"

const News = () => {
  return (
    <div className='w-[90%] grid 2xl:grid-cols-4 grid-cols-1 md:grid-cols-3 md:gap-10 gap-5'>
        {cardsData.map((card) => (
            
            <Card className="h-full" key={card.id}>
                <CardHeader className='h-[35vh] relative'>
                    <Image
                        src={card.img}
                        layout='fill'
                        alt={card.name}
                    />
                </CardHeader>
                <CardContent className=''>
                    <CardTitle>{card.name}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                </CardContent>
            </Card>
        ))}
    </div>
  )
}

export default News