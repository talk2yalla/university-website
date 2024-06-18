import { facilities } from '../data';
const Facilities = () => {
	return (
		<div className='our-facilities-container light-blue-background'>
			<div className='our-facilities-center wrapper'>
				<div className='section-title paddingTopDesktop-hundred paddingTopMobile-fifty'>
					<h3 className='title'>our facilities</h3>
					<div className='underline'></div>
				</div>
				<section className='our-facilities paddingTopDesktop-fifty paddingBottomDesktop-hundred paddingTopMobile-fifty paddingBottomMobile-fifty three-column-layout'>
					{facilities.map((services) => {
						const { id, img, facility, info } = services;
						return (
							<article className='each-facility' key={id}>
								<div className='img-container'>
									<img src={img} alt='our campus facility' />
								</div>
								<div className='facility-info paddingTopMobile-thirty paddingBottomMobile-thirty paddingTopDesktop-forty paddingBottomDesktop-forty text-center'>
									<h3 className='facility-title'>{facility}</h3>
									<p className='facility-desc'>{info}</p>
								</div>
							</article>
						);
					})}
				</section>
			</div>
		</div>
	);
};
export default Facilities;
