import React, { Fragment } from 'react';
import './css/projects.css';
// import projectImg1 from '../images/project1.jpg';
// import Aos from 'aos';
// import { Link } from 'react-router-dom';
import { ProjectsImageData } from './ProjectsImageData';

const Projects = () => {
	return (
		<Fragment>
			<span id='projects'></span>
			<section className='projects'>
				<h2 className='about-title projects-title'>
					My <span className='about-title-orange'>Projects</span>
				</h2>
				<p className='projects-subTitle'>
					Click on the image to see the project description
				</p>
				<article data-aos='fade-up' className='projects-container'>
					{
						//! to add a new project go to ProjectsImageData and add the details to the array
						ProjectsImageData.map((item, index) => (
							<picture key={index} className='project-image-container'>
								<a
									target='_blank'
									href={item.pathname}
									alt={item.title}
									rel='noreferrer'
								>
									<img
										className='project-image'
										src={item.imageName}
										alt='website preview'
									/>
									<div className='img-overlay'>
										<p className='image-title'>{item.title}</p>
										<p className='image-subTitle'>{item.subtitle}</p>
									</div>
								</a>
							</picture>
						))
					}
				</article>
			</section>
		</Fragment>
	);
};

export default Projects;
