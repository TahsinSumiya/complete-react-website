import React from 'react'
import web from './images/pic2.jpg'
import data from './data'
import Card from './Card'
import Footer from './Footer'
export default function Service() {
  return (
    <>
     <div className='my-5'>
      <h1 className='text-center header-2'>our Service</h1>
    </div>
    <div className='container-fluid '>
    <div className='row'>
            <div className='col-10 mx-auto'>
            <div className='row gy-2 m-3'>    
             {
              data.map((val,index)=>{
                return <Card
                key={index}
                imgsrc={val.imgsrc}
               title={val.title}
                
                />
              })
             }
             </div>
            </div>
            </div>
    </div>

</>
  )
}