import { useForm } from '@inertiajs/react'
import React from 'react'
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

  return (
    <div>

        <h1 className=' title'> Creating a new Post</h1>

        <div className=' w-1/2 mx-auto'>
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
    </div>
  )

}
Create.layout = page => <Layout children={page}/>

