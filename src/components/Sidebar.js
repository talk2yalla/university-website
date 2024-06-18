import homeImg from '../icons/university.svg';
import closeImg from '../icons/close.svg';
import { navLinks } from '../data';
const Sidebar = () => {
	return (
		<aside className='sidebar-container'>
			<div className='sidebar-center wrapper'>
				<div className='side-header'>
					<div className='logo-section'>
						<a href='#home'>
							<img src={homeImg} alt='university logo' className='logo' />
						</a>
					</div>
					<div className='close-button'>
						<img src={closeImg} alt='sidebar close' />
					</div>
				</div>
				<div className='sidebar-content'>
					<div className='sidebar-links-main paddingTopMobile-fifty'>
						<ul className='sidebar-links'>
							{navLinks.map((link) => {
								const { id, src, title } = link;
								return (
									<li key={id}>
										<a className='nav-link active' href={src}>
											{title}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</aside>
	);
};
export default Sidebar;
