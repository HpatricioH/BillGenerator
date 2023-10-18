'use client'
import React, { useState } from 'react'
import { useSession, signOut } from "next-auth/react"



export function Header() {
  const [count, setCount] = useState(0)
  // const session = useSession()
  // console.log(session)

  const handleButton = async () => {
    // await signOut()
    console.log('button clicked')
  }

  return (
    <div className='p-4' onClick={handleButton}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {/* <nav>
        <ul>
          <li>
            <button  type="button">Sign Out</button>
          </li>
        </ul>
      </nav> */}
    </div>
  )
}
