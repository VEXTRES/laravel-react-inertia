import React, { useEffect, useState } from 'react'
import Layout from '../Layouts/Layout'
import {useRoute} from '../../../vendor/tightenco/ziggy'
import { Head, Link, useForm, usePage } from '@inertiajs/react'

function Home({posts}) {

    const route=useRoute();
    const { flash } = usePage().props
    const [flashMsg,setFlashMsg]=useState()
    const {component}=usePage()

    const { delete: destroy,}=useForm();
    const borrar = (e, id) => {
        e.preventDefault();
        destroy(`posts/${id}`);
        // destroy(route('posts.destroy',id));
      };

      useEffect(() => {
        if (flash.message) {
            setFlashMsg(flash.message);
            const timeout = setTimeout(() => {
                setFlashMsg(null);
                flash.message =null

            }, 3000);
            // return () => clearTimeout(timeout);
            // Limpiar el timeout si el componente se desmonta o si cambia el flash.message
        }
    }, [flash.message]);
  return (
    <div>
        <Head title={component} />

        <h1 className='title'> Hello usersss  </h1>

            {flashMsg && <div className=' text-xl text-red-400 font-bold p-3 rounded-md'>{flash.message}</div>}


        <div>
            {posts.data.map( post=>(
                <div key={post.id} className=' p-4 border-b'>
                    <div>
                        <span>
                            Posted on:
                        </span>
                        <span className=' text-sm text-slate-400'>

                            {new Date(post.created_at).toLocaleTimeString()}
                        </span>

                    </div>
                    <p className=' font-medium'>
                        {post.body}
                    </p>
                    {/* <Link className=' text-link' href={`posts/${post.id}`}> Read more...</Link> */}
                    <Link className=' text-link' href={route('posts.show',post)}> Read more...</Link>
                    <div className=' relative flex space-x-2'>
                        <form  onSubmit={(e) => borrar(e, post.id)}>
                            <button type='submit' className='bg-red-400 text-white p-2 rounded-sm '>
                                Delete
                            </button>
                        </form>
                            <Link href={`/posts/${post.id}/edit`} className='bg-green-400 text-white p-2 rounded-sm'>
                                Editar
                            </Link>
                    </div>
                </div>
            ))}


            {/* Barra de navegacion */}
            <div className=' py-12 px-4'>
                {posts.links.map( link=>(
                    link.url?
                        <Link href={link.url} key={link.label}
                        dangerouslySetInnerHTML={{ __html:link.label}}
                        className={`p-1 mx-1 ${link.active?'text-blue-400 font-bold':' text-black'}`}
                        ></Link>
                    : <span
                        key={link.label}
                        dangerouslySetInnerHTML={{__html: link.label}}
                        className=' p-1 mx-1 text-slate-300 '
                     ></span>
                ))}

            </div>
        </div>

    </div>
  )
}

Home.layout = page => <Layout children={page}/>

export default Home
