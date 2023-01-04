import React, { Fragment, useEffect } from 'react';
import './css/about.css';
import about from '../images/aboutPic.png';
import html from '../images/technologies/html.png';
import css from '../images/technologies/css.png';
import bootstrap from '../images/technologies/bootstrap.png';
import js from '../images/technologies/js.png';
import react1 from '../images/technologies/react1.png';
import typescript from '../images/technologies/typescript.png';
import git from '../images/technologies/git.png';
import github from '../images/technologies/github.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 }); // set the time duration on the animation
	}, []);
	return (
		<Fragment>
			<div id='about-anchor'></div>
			<section className='about-container'>
				<h2 data-aos='fade-up' className='about-title'>
					About <span className='about-title-orange'>Me</span>
				</h2>
				<img
					data-aos='fade-left'
					className='computer-img'
					src={about}
					alt='computer with code'
				/>

				<div className='about-bottom-right'>
					<p data-aos='fade-right' className='about-description'>
						I am a self-motivated, organized and committed individual with the
						ability to work well independently or as part of a professional
						development team. <br />I have been the last two years learning the
						technologies for Web Developing and have a firm knowledge of HTML,
						CSS, JavaScript, React, NodeJs and PostgreSql.
					</p>
					<div data-aos='fade' className='about-technologies-container'>
						<img
							className='about-technologies-img'
							src={html}
							alt='html logo'
						/>
						<img className='about-technologies-img' src={css} alt='css logo' />
						<img
							className='about-technologies-img'
							src={js}
							alt='javascript logo'
						/>
						<img
							className='about-technologies-img'
							src={react1}
							alt='react js logo'
						/>
						<img
							className='about-technologies-img'
							src={bootstrap}
							alt='bootstrap logo'
						/>
						<img
							className='about-technologies-img'
							src={typescript}
							alt='typescript logo'
						/>
						<img className='about-technologies-img' src={git} alt='git logo' />
						<img
							className='about-technologies-img'
							src={github}
							alt='github logo'
						/>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default About;
