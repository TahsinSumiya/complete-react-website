import React from 'react'
// import web from "./images/pic2.jpg"
import { NavLink } from 'react-router-dom';
export default function Common(props) {
  return (
    <>
      <section id='header' className=''>
      <div className='container-fluid'>
        <div className='row'>
        <div className='col-10 mx-auto'>
          <div className='row d-flex align-items-center boxname'>
        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 '>
            <h1 className='header-1'>{props.name}</h1>
            <h2 className='my-3 header-2'>
                {props.para}
            </h2>
            <div className='mt-3'>
                {/* <NavLink to={props.visit} className='btn btn-dark btn-outline-info rounded-5'>{props.btnmae}</NavLink> */}
                 <NavLink to={props.visit} className='btn btn-dark btn-outline-info rounded-5'>{props.btname}</NavLink>
            </div>
        </div>
        </div>
        <div className='col-lg-6 order-1 order-lg-2 header-img'>
            <img src={props.imgsrc} className="img-fluid animated img" alt="image"></img>
        </div>
        
        </div>
        </div>

    </div>
      </section>
    </>
  )
}
