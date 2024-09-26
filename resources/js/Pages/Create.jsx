import { router, useForm } from '@inertiajs/react'
import React, { useState } from 'react'
import Layout from '../Layouts/Layout'

export default function Create() {

    const { data, setData, post, processing, errors } = useForm({
        body:'',
      })

      const submit=(e)=>{
        e.preventDefault()
        post('/posts')
      }
      console.log(errors)

      //*****  TODO ESTO SI QUIERES HACERLO SIN EL useForm de inertia  *******
      const [values,setValues]=useState({
        body:''
    })
    const [error,setError]=useState(null)
    const [processin,setProcessin]=useState(false)

    const handleChanged=(e)=>{
        const key=e.target.id
        const value = e.target.value
        setValues(values=>({
            ...values,
             [key]:value,
        }))
    }
    const handleSubmit=e=>{
        e.preventDefault()
        setProcessin(true)

        axios.post('/posts',values).then((response)=>{
            console.log('Post creado',response.data)
        })
        .catch((error)=>{
            console.log('Error al crear el post',error.response.data)
            setError(error.response.data.errors)
            setProcessin(false)
        })
    }

    // *******************************
  return (
    <div>

        <h1 className=' title'> Creating a new Post</h1>

        <div className=' w-1/2 mx-auto'>
            <h2>usando UseForm</h2>
            <form onSubmit={submit}>
                <textarea rows={10} value={data.body}
                className={errors.body&&'!ring-red-500'}
                onChange={e=>setData('body',e.target.value)} ></textarea>
                {errors.body && <p className='error text-xl'>{errors.body}</p>}
                <button className=' primary-btn mt-4'
                disabled={processing}
                > Create Post</button>
            </form>
        </div>

        {/* sin usar el useForm */}
        <div className=' w-1/2 mx-auto mt-10'>
            <h2>Otro form pero sin usar UseForm</h2>
            {error&&<p className='error text-xl !ring-red-500'>error</p>}
            <form onSubmit={handleSubmit}>
                <textarea rows={10}
                id='body'
                value={values.body}
                onChange={handleChanged}
                ></textarea>
                <button className=' primary-btn mt-4'
                disabled={processin}
                > Create Post</button>
            </form>
        </div>
    </div>
  )

}
Create.layout = page => <Layout children={page}/>

