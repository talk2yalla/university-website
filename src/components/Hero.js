import heroImg from '../assets/university-banner.jpeg';

const Hero = () => {
	const heading = 'Vellore Institute of Technology';
	const text = `	By making this website you guys will learn html, css, javascript
							completely and you will also learn complete responsive web design
							in one project.`;
	return (
		<div className='home-page page-hero-container'>
			<div className='page-hero'>
				<div className='hero-img-component'>
					<div className='img-container'>
						<img src={heroImg} alt='home page hero' />
					</div>
				</div>
				<div className='hero-box paddingTopMobile-thirty paddingBottomMobile-thirty'>
					<div className='hero-content wrapper text-container text-center'>
						<h1 className='heading'>{heading}</h1>
						<p className='desc'>{text}</p>
						<div className='button-container'>
							<a
								href='#'
								className='home-button button-primary-light display-inline-flex'
							>
								get started
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;
