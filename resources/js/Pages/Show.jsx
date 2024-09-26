import React from 'react'
import Layout from '../Layouts/Layout'

export default function Show({post}) {
  return (
    <div>
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
                </div>
    </div>
  )
}
Show.layout=page=><Layout children={page}/>
