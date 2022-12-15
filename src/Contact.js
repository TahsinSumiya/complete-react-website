import React, { useState } from 'react'
import Footer from './Footer'
export default function Contact() {
  const [data,setData]=useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
    });

    const InputEvent =(event)=>{
       const {name,value}=event.target;
       setData((preVal)=>{
        return{
          ...preVal,
          [name]:value,
        };
       });
    };
  const formSubmit =(e)=>{
  e.preventDefault();
  alert(`${data.fullname},
  ${data.email},
  ${data.phone},
  ${data.msg},
  
  
  `);
  }
  return (
    <>
      <div className='my-5'>
          <h1 className='header-2 text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
            <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
                  <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                  <input type="text"
                   className="form-control" 
                   id="exampleFormControlInput1"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}

                    placeholder="fullname"/>
                  </div>
                  <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Mobile</label>
                  <input type="tel"
                   className="form-control" 
                   id="exampleFormControlInput1"
                   name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="Mobile"/>
                  </div>
                  <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" 
                  className="form-control"
                   id="exampleFormControlInput1"
                   name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="name@example.com"/>
                  </div>
                  <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                  <textarea className="form-control"
                   id="exampleFormControlTextarea1"
                   name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                    rows="3">
                    </textarea>
                  </div>
                  <div className="col-auto">
    <button type="submit" className="btn btn-dark btn-outline-info rounded-5 mb-3">Confirm identity</button>
  </div>
            </form>
              </div>
            </div>
      </div>

    <Footer/>
    </>
  )
}