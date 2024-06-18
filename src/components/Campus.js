import { campuses } from '../data';

const Campus = () => {
	return (
		<div className='our-campuses-container light-pink-background'>
			<div className='our-campuses-center wrapper'>
				<div className='section-title paddingTopDesktop-hundred paddingTopMobile-fifty'>
					<h3 className='title'>our campuses in india</h3>
					<div className='underline'></div>
				</div>

				<section className='our-campuses paddingTopDesktop-fifty paddingBottomDesktop-hundred paddingTopMobile-fifty paddingBottomMobile-fifty three-column-layout'>
					{campuses.map((campus) => {
						const { id, img, icon, location, info, address } = campus;
						return (
							<article className='each-campus' key={id}>
								<div className='img-container'>
									<img src={img} alt=' campus' />
									<a href='#' className='share-icon-campus'>
										<img src={icon} alt='share icon' />
									</a>
								</div>
								<div className='campus-info text-center'>
									<h2 className='campus-title'>{location}</h2>
									<p className='desc'>{info}</p>
									<h4 className='address'>{address}</h4>
								</div>
							</article>
						);
					})}
				</section>
			</div>
		</div>
	);
};
export default Campus;
