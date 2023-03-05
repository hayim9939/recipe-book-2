import React from 'react'
import { Link } from 'react-router-dom'
import { TiPlus } from "react-icons/ti";

export default function NewCard() {
    return (
     <>
     <Link to={"/newrecipe"}>
        <div className="card text-dark NewCardHover mb-2 bg-bg">
          <div className="card-img-overlay p-0">
            <h4 className='d-flex justify-content-center align-items-center'>הוסף מתכון</h4>
            <div className='d-flex justify-content-center align-items-center'> <TiPlus size={30}/></div>
          </div>
        </div>
        </Link>
      </>
      )
    }
    