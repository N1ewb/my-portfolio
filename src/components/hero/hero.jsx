import React from 'react'

function Hero() {
  return (
    <>
    
        <div className='hero'>
            <div className='hero-container'>
                <div className='col'>
                    <div className='intro-head'>
                        <h3>Nathaniel Lucero</h3>
                        <h1>Web Designer & Web Developer</h1>
                    </div>
                </div>
                <div className='col'>
                    <div className='intro-body'>
                        <p>A web developer who turns ideas into interactive online experiences.</p>
                    </div>
                </div>
                <div className='col'>
                    <div className='intro-foot'>
                        <div className="hire-me-container">
                            <div className="hire-me-wrapper">
                                <strong>
                                    <a href="#" type="button">Hire Me</a>
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Hero