import React from 'react'
import web from './images/pic2.jpg'
import { NavLink } from 'react-router-dom';
export default function Card(props) {
  return (
    <>
   
    
             <div className='col-md-4 col-10 mx-auto'>
                          <div class="card container-fluid">
                <img src={props.imgsrc} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <NavLink to="" className="btn btn-dark btn-outline-info rounded-5 btn-col">Go somewhere</NavLink>
                </div>
              </div>
                </div>
              
           
   

</>
  )
}