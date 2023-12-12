import React from 'react'
import './Hero.css'
import heroImg from '../assets/image-web-3-desktop.jpg'
import heroImg2 from '../assets/image-web-3-mobile.jpg'


const Hero = () => {
    return (
        <div className='herosection' >
            <div className='sectionOne' >
                <img className='heroImg' src={heroImg} />
                <img className='heroImg2' src={heroImg2} />
                
                <div className='heroSectionOne' >
                    <div className='heroOne' >
                        <h1>
                            The Bright <br /> Future of Web 3.0
                        </h1>
                    </div>
                    <div className='heroTwo' >
                        <h5 className='sectionWord' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maiores fuga cupiditate perferendis, eligendi molestiae iusto ex nulla ab perspiciatis impedit corporis, dignissimos quis natus itaque vitae magni explicabo laboriosam!
                        </h5>
                        <button>
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>
            <div className='sectionTwo'>
                <h1>New</h1>

                <h4>Hydrogen VS Electric Cars</h4>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                <hr />

                <h4>The Downsides of AI Artistry</h4>
                <p>What are the possible adverse effects of on-demand AI image generation?</p>
                <hr />

                <h4>Is VC Funding Drying Up?</h4>
                <p>Private funding by VC firms is down 50% YOY. WE take a look at what that means.</p>

            </div>
        </div>
    )
}

export default Hero