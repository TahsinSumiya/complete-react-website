import React from 'react'
import web from "./images/pic2.jpg"
import { NavLink } from 'react-router-dom';
import Common from './Common'
import web3 from './images/pic6.jpg'
import Footer from './Footer'
export default function Home() {
  return (
    <>
      <Common
      para="We are the team of developers making websites"
      name='Homepage'
      imgsrc={web3}
       visit='/service'
        btname='Get started'/>
    <Footer/>
    </>
  )
}
