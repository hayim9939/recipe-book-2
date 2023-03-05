import React from 'react'
import { IoMdReturnRight } from 'react-icons/io'
import { Link } from 'react-router-dom'
import "./Pro.css"
export default function CreditCard() {
  return (
    <>
    <div className='bgImg'>
    <Link to={"/main/pro"}>
          <div className="btn back-button">
            <div><IoMdReturnRight size={30}/></div>
          </div>
        </Link>

    </div>

    </>
  )
}
