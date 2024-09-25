import React from 'react'

export default function Create() {
  return (
    <div>
        <h1 className=' title'> Creating a new Post</h1>

        <div className=' w-1/2 mx-auto'>
            <form action="">
                <textarea rows={10} name="" id=""></textarea>
                <button className=' primary-btn mt-4'> Create Post</button>
            </form>
        </div>
    </div>
  )
}
