import React from 'react'
import Layout from '../Layouts/Layout'

export default function Show({post}) {
  return (
    <div>
        <p className='title'>{post.body}</p>
    </div>
  )
}
Show.layout=page=><Layout children={page}/>
