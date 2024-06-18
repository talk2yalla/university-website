import contactImg from '../assets/contact-promotion.jpeg';

const Contact = () => {
	return (
		<div class='contact-promotion-container light-pink-background'>
			<div class='contact-promotion-center wrapper'>
				<div class='section-title paddingTopDesktop-hundred paddingTopMobile-fifty'>
					<h3 class='title'>contact us for your future</h3>
					<div class='underline'></div>
				</div>
				<section class='contact-promotion paddingTopDesktop-fifty paddingBottomDesktop-hundred paddingTopMobile-fifty paddingBottomMobile-fifty'>
					<div class='contact-promo-img'>
						<img src={contactImg} alt='contact promotion' />
						<div class='contact-info-container text-center text-container'>
							<h2 class='contact-heading'>
								enroll for our various b.tech courses anywhere from india
							</h2>
							<a href='./contact.html' class='button-primary-light'>
								contact us
							</a>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
export default Contact;
