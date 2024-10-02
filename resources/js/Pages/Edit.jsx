import { useForm } from '@inertiajs/react'
import React from 'react'
import Layout from '../Layouts/Layout'

export default function Edit({post}) {

    const { data, setData, put, processing, errors } = useForm({
        body:post.body,
      })

      const submit=e=>{
        e.preventDefault()
        put(`/posts/${post.id}`,data)
      }

  return (
    <div>
        <h1 className=' title'> Editando el Post</h1>

        <div className=' w-1/2 mx-auto'>
            <h2>usando UseForm</h2>
            <form onSubmit={submit}>
                <textarea rows={10} value={data.body}
                className={errors.body&&'!ring-red-500'}
                onChange={e=>setData('body',e.target.value)} ></textarea>
                {errors.body && <p className='error text-xl'>{errors.body}</p>}
                <button className=' primary-btn mt-4'
                disabled={processing}
                > editar Post</button>
            </form>
        </div>
    </div>
  )
}
Edit.layout=page=><Layout children={page}/>

