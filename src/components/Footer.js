import { socialLinks, navLinks } from '../data';
const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='footer-center wrapper'>
				<div className='footer-links-main'>
					<ul className='footer-links'>
						{navLinks.map((links) => {
							const { id, src, title } = links;
							return (
								<li key={id}>
									<a className='footer-link' href={src}>
										{title}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='social-links-main'>
					<ul className='social-links'>
						{socialLinks.map((links) => {
							const { id, href, img, linkText } = links;
							return (
								<li className='social-link' key={id}>
									<a href={href} target='_blank' rel='noreferrer'>
										<img src={img} alt={linkText} />
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='footer-copy-right'>
					<p>
						Copyright -{' '}
						<span className='copyright-date'>{new Date().getFullYear()}</span>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Footer;
