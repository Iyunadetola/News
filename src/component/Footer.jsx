import React from 'react'
import img1 from '../assets/image-retro-pcs.jpg'
import img2 from '../assets/image-top-laptops.jpg'
import img3 from '../assets/image-gaming-growth.jpg'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='sub' >
        <div className='subsection' >
            <div>
                <img src={img1} className='image' />
            </div>
            <div className='footerDeets' >
                <h2>01</h2>
                <h3>Reviving Retro PCs</h3>
                <p>What happens when old PCs are given modern upgrades</p>
            </div>

        </div>

        <div className='subsection sectionn' >
            <div>
                <img src={img2} className='image'  />
            </div>
            <div>
                <h2>02</h2>
                <h3>Reviving Retro PCs</h3>
                <p>What happens when old PCs are given modern upgrades</p>
            </div>

        </div>

        <div className='subsection sectionn ' >
            <div>
                <img src={img3} className='image'  />
            </div>
            <div>
                <h2>03</h2>
                <h3>Reviving Retro PCs</h3>
                <p>What happens when old PCs are given modern upgrades</p>
            </div>

        </div>
    </div>
  )
}

export default Footer