import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, ArrowLeft, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Verify = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <Card className='w-[510px] px-5'>
        <CardHeader className='text-center'>
            <div className='mb-4 mx-auto flex size-20 justify-center items-center rounded-full bg-blue-100'>
                <Mail className='size-12 text-blue-500'/>
            </div>
            <CardTitle className='text-2xl font-bold'>
                Check your email
            </CardTitle>
            <CardDescription>
                We have sent a verification link to your email
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className='mt-4 rounded-md bg-yellow-50 border-yellow-300 p-4'>
                <div className='flex items-center gap-x-3'>
                    <AlertCircle className='size-5 text-yellow-500'/>
                    <p className='text-sm font-medium text-yellow-700'>If you don&apos;t receive an email, check your spam folder</p>
                </div>
            </div>
        </CardContent>
        <CardFooter>
            <Link href={'/'} className={buttonVariants({
                className: 'w-full',
                variant: 'outline'
            })}>
            <ArrowLeft className='size-4'/> Back to home page
            </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Verify
