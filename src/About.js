import React from 'react'
import web from "./images/pic2.jpg"
import { NavLink } from 'react-router-dom';
import Common from './Common'
import web3 from './images/pic4.jpg'
import Footer from './Footer'
export default function About() {
  return (
    <>
      <Common 
     
       name='Aboutpage'
      para="qwjhdkeqwdhkqegdrgrgregrgtregtrx"
       imgsrc={web3}
        visit='/contact'
         btname='Contact now' />

         <Footer/>
    </>
  )
}
