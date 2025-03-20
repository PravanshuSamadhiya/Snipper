"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { useActionState } from 'react';
import * as actions from "@/action";

const CreateSnippetPage = () => {

   const [formStateData, xyz] = useActionState(actions.createSnippet,{message:""});

    return (
        <form className='py-1' action={xyz}>
            <div>
               <Label className='py-2'>Title</Label>
               <Input type='text' name='title' id='title'/>
            </div>
            <div>
               <Label className='py-1'>Code</Label>
               <Textarea name='code' id='title'/>
            </div>
         {formStateData.message && <div className="p-2 bg-red-300 border-2 border-red-600 mt-2">{formStateData.message}</div>}
          <Button type='submit' className='my-4 bg-black text-white'>New</Button>
        </form>

    )
}

export default CreateSnippetPage
