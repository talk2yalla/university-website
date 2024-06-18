import { socialLinks, navLinks } from '../data';
import logo from '../icons/university.svg';
import share_logo from '../icons/bars.svg';

const Navbar = () => {
	return (
		<nav className='nav-container'>
			<div className='nav-center wrapper'>
				<div className='logo-section'>
					<a href='./'>
						<img src={logo} alt='university logo' className='logo' />
					</a>
				</div>
				<div className='hamburger'>
					<img src={share_logo} alt='sidebar button' />
				</div>

				<div className='nav-links-main'>
					<ul className='nav-links'>
						{navLinks.map((navLinks) => {
							const { id, src, title } = navLinks;
							return (
								<li key={id}>
									<a className='nav-link' href={src}>
										{title}
									</a>
								</li>
							);
						})}
					</ul>
				</div>

				<div className='nav-social-links-main'>
					<ul className='nav-social-links'>
						{socialLinks.map((links) => {
							const { id, href, img, linkText } = links;
							return (
								<li className='nav-social-link' key={id}>
									<a href={href} target='_blank' rel='noreferrer'>
										<img src={img} alt={linkText} />
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
