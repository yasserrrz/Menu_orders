import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='text-center d-flex align-items-center flex-column justify-content-center' style={{height : "75vh"}}>
        <h2>Page Not Found</h2>
        <div className="">
<p>You can Log in by click on this button</p>
            <Link className='' to={"/"}>
        <button className="btn btn-primary" style={{textDecoration:"none" }}>
                Log In
        </button>
                </Link>
        </div>

    </div>
  )
}
