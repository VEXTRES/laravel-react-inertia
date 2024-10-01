import React from 'react'
import Layout from '../Layouts/Layout'
import {useRoute} from '../../../vendor/tightenco/ziggy'
import { Link, useForm } from '@inertiajs/react'

function Home({posts}) {

    const route=useRoute();

    const { delete: destroy}=useForm();
    const submit = (e, id) => {
        e.preventDefault();
        destroy(`posts/${id}`);
        // destroy(route('posts.destroy',id));
      };

  return (
    <div>
        <h1 className='title'> Hello usersss  </h1>

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
                    <form  onSubmit={(e) => submit(e, post.id)}>
                        <button type='submit' className='bg-red-400 text-white p-2 rounded-sm'>
                            Delete
                        </button>
                    </form>
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
