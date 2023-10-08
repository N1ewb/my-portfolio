import React from 'react'

function Portfolio() {
  return (
    <>
        <div className='portfolio'>
                <div className='portfolio-container'>

                    <div className='col'>
                        <div className='Title'>
                            <h1>Portfolio</h1>
                        </div>
                    </div>

                    <div className='col'>

                        <div className='projects-list'>

                            <div className='project-card'>
                                <div className='project-card-body'>
                                    <img src={require('./project1.png')} alt="project1"/>
                                </div>
                                
                            </div>

                            <div className='project-spacer'>
                                <div className='project-card-title'>
                                    <a href="#">Space Express</a>
                                </div>
                                <p>Space Express is an innovative website that invites visitors on an exhilarating journey through the cosmos. Explore the wonders of space exploration, from breathtaking galaxies to historic lunar missions, all in one immersive platform. Engage with interactive exhibits, awe-inspiring visuals, and expert insights, making learning about the universe an unforgettable experience.</p>
                            </div>
                            <div className='project-spacer'>
                            <div className='project-card-title'>
                                    <a href="#">Skill Issue E-School</a>
                                </div>
                                <p>Skill Issue E-School Express is a cutting-edge online learning platform tailored for modern education. Offering a diverse range of courses, from coding and digital marketing to creative arts, the platform empowers learners of all ages with expert-led classes, interactive assignments, and real-world projects. Experience a dynamic and supportive online community, where knowledge meets innovation, making learning engaging, accessible, and rewarding for everyone.</p>
                            </div>
                            <div className='project-card'>
                                <div className='project-card-body'>
                                    <img src={require('./project2.png')} alt="project1"/>
                                </div>
                                
                            </div>   
                            
                            <div className='project-card'>
                                
                                <div className='project-card-body'>
                                    <img src={require('./project3.png')} alt="project1"/>
                                </div>
                                
                            </div>  
                            <div className='project-spacer'>
                                <div className='project-card-title'>
                                    <a href="#">Rebot AI</a>
                                </div>
                                <p>Rebot AI is your intelligent messaging companion, revolutionizing communication through advanced artificial intelligence. This app seamlessly integrates natural language processing and machine learning to provide users with personalized and intuitive conversations. From instant responses to smart suggestions, Rebot AI transforms everyday messaging into a delightful and efficient experience, making connecting with others more interactive and enjoyable than ever before.</p>
                            </div>

                        </div>

                    </div>

                </div>
        </div>

    </>    
    )
}

export default Portfolio