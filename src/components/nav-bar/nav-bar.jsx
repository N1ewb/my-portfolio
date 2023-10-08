import React from 'react'

function Navbar() {

  return (
    <>

    <div className='nav-bar'>

        <div className='nav-bar-container'>

            <div className='col'>
                <div className='logo-wrapper'>
                    <img src={require('./my-logo-white.png')} alt="logo" height="80px" width="80px"/>
                </div>
            </div>

            <div className='col'>
                <div className='spacer'></div>
            </div>

            <div className='col'>
                <div className='nav-links'>
                    <a href="#">Home</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Services</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </div>

        </div>

    </div>

    </>
  )

}

export default Navbar