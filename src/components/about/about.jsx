import React from 'react'

const About = () => {
  return (
    <>
    
    <div className='about'>
        <div className='about-container'>
            <div className='row-1'>
                <div class="about-title-container">
                    <div className='about-Title'><p>ABOUT ME</p></div>
                </div>
            </div>

            <div className='row-1'>
                <div className='about-content'>
                    <div className='about-content-container'>
                        <div className='col-1'>
                            <div className='my-description'>
                                <div className='my-description-head'>
                                    <h1>Hi, I am Nathaniel A Lucero, A web developer who turns ideas into interactive online experiences.</h1>
                                </div>
                                <div className='my-description-body'>
                                    <p>A passionate web designer and developer based in the Philippines. With a keen eye for design and a knack for coding, I specialize in creating visually appealing and highly functional websites. I thrive on turning ideas into interactive digital experiences, and I'm dedicated to crafting seamless online solutions that leave a lasting impression. Let's bring your online vision to life together!</p>
                                </div>
                                <div className='about-hire-me-button'>
                                    <a href="#">HIRE ME</a>
                                </div>
                            </div>
                        </div>
                        <div className='about-spacer'></div>
                        <div className='col-1'>
                            <div className='my-picture'>
                                <img src={require('./my-picture.jpg')} alt="My picture" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    
    </>
  )
}

export default About