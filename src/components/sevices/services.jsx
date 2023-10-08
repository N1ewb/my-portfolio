import React from 'react'

function Services() {
  return (
    <>
    
        <div className='services'>
            <div className='services-container'>

                <div className='col'>
                    <div className='Title'>
                        <h1>Services</h1>
                    </div>
                </div>

                <div className='col'>
                    <div className='service-card-list'>
                    <div className='service-card'>
                        <div className='service-card-head'>
                            <h5>Web Design</h5>
                            <img src={require("./webdesign.jpg")}  alt="Web Design" />
                        </div>
                        <div className='service-card-body'>
                            <p>Web designing is the art and science of creating visually appealing and user-friendly websites, combining creativity with technical expertise to enhance online user experiences.</p>
                        </div>
                        <div className='service-card-foot'>
                            <a href="#">Learn More</a>
                        </div>
                    </div>

                    <div className='service-card'>
                        <div className='service-card-head'>
                            <h5>Web Developing</h5>
                            <img src={require("./webdevelop.jpg")}  alt="Web Develop" />
                        </div>
                        <div className='service-card-body'>
                            <p>Web development involves building and maintaining websites and web applications, focusing on the technical aspects such as coding, database management, and server configurations to ensure seamless functionality and user interaction.</p>
                        </div>
                        <div className='service-card-foot'>
                            <a href="#">Learn More</a>
                        </div>
                    </div>

                    <div className='service-card'>
                        <div className='service-card-head'>
                            <h5>Programming</h5>
                            <img src={require("./program.jpg")} alt="Program" />
                        </div>
                        <div className='service-card-body'>
                            <p>Programming is the process of designing and building computer software by creating sets of instructions that enable computers to perform specific tasks, empowering developers to solve complex problems and innovate across various industries.</p>
                        </div>
                        <div className='service-card-foot'>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>

    </>
  )
}

export default Services