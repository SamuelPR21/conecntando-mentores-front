import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const News = () => {
  return (
    <div className='flex gap-10'>
        <Card>
            <CardHeader>
                <CardTitle>Card Title masonaspasdknasdoka sdopasdjaospdinas </CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
            </Card>
            <Card>
            <CardHeader>
                <CardTitle>Card Title masonaspasdknasdoka sdopasdjaospdinas</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
            </Card>
            <Card>
            <CardHeader>
                <CardTitle>Card Title masonaspasdknasdoka sdopasdjaospdinas</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    </div>
  )
}

export default News