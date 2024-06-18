import { courses } from '../data';

const Courses = () => {
	return (
		<div className='featured-courses-container light-blue-background'>
			<div className='featured-courses-center wrapper'>
				<div className='section-title paddingTopDesktop-hundred paddingTopMobile-fifty'>
					<h3 className='title'>featured courses</h3>
					<div className='underline'></div>
				</div>
				<section className='featured-courses paddingTopDesktop-fifty paddingBottomDesktop-fifty paddingTopMobile-fifty paddingBottomMobile-fifty three-column-layout'>
					{courses.map((course) => {
						const { id, img, text } = course;
						return (
							<article className='single-course' key={id}>
								<div className='img-container'>
									<img src={img} alt={text} />
								</div>
								<div className='course-title'>
									<p>{text}</p>
								</div>
							</article>
						);
					})}
				</section>
				<div className='paddingBottomMobile-fifty paddingBottomDesktop-hundred text-center'>
					<a
						href='./courses.html'
						className='button-primary-dark display-inline-flex'
					>
						view all
					</a>
				</div>
			</div>
		</div>
	);
};
export default Courses;
