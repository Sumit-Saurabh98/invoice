"use client"

import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'
import {Loader2} from "lucide-react"

const SubmitButton = () => {
    const {pending} = useFormStatus()
  return (
    <>
      {
        pending ? (
            <Button disabled className='w-full'>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...
            </Button>
        ) : (
            <Button type='submit' className='w-full'>
                Submit
            </Button>
        )
      }
    </>
  )
}

export default SubmitButton
