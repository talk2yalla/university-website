import linkedinIcon from './icons/linkedin.svg';
import instagramIcon from './icons/instagram.svg';
import youtubeIcon from './icons/youtube.svg';
import githubIcon from './icons/github.svg';
import facImg1 from './assets/facility-1.jpeg';
import facImg2 from './assets/facility-2.jpeg';
import facImg3 from './assets/facility-3.jpeg';
import campus1 from './assets/campus-1.jpeg';
import campus2 from './assets/campus-2.jpeg';
import campus3 from './assets/campus-3.jpeg';
import campus4 from './assets/campus-4.jpeg';
import icon from './icons/share.svg';
import course1 from './assets/course-1.jpeg';
import course2 from './assets/course-2.jpeg';
import course3 from './assets/course-3.jpeg';
import course4 from './assets/course-4.jpeg';
import course5 from './assets/course-5.jpeg';
import course6 from './assets/course-6.jpeg';

export const socialLinks = [
	{
		id: 1,
		href: `https://www.linkedin.com`,
		img: linkedinIcon,
		linkText: 'linkedin',
	},
	{
		id: 2,
		href: `https://www.instagram.com`,
		img: instagramIcon,
		linkText: 'instagram',
	},
	{
		id: 3,
		href: `https://www.youtube.com`,
		img: youtubeIcon,
		linkText: 'youtube',
	},
	{
		id: 4,
		href: `https://www.github.com`,
		img: githubIcon,
		linkText: 'github',
	},
];

export const navLinks = [
	{ id: 1, src: `#`, title: 'Home' },
	{ id: 2, src: `#`, title: 'About' },
	{ id: 3, src: `#`, title: 'Courses' },
	{ id: 4, src: `#`, title: 'Contact' },
];

export const facilities = [
	{
		id: 1,
		img: facImg1,
		facility: 'world className library',
		info: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Blanditiis voluptatem numquam voluptatum a repellat laudantium
								vero voluptate facere, nemo consectetur?`,
	},
	{
		id: 2,
		img: facImg2,
		facility: 'first class hostels',
		info: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Blanditiis voluptatem numquam voluptatum a repellat laudantium
								vero voluptate facere, nemo consectetur?`,
	},
	{
		id: 3,
		img: facImg3,
		facility: 'largest play grounds',
		info: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Blanditiis voluptatem numquam voluptatum a repellat laudantium
								vero voluptate facere, nemo consectetur?`,
	},
];
export const campuses = [
	{
		id: 1,
		img: campus1,
		icon: icon,
		location: 'Andhra Pradesh',
		info: `	Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
								minima, dolorum asperiores facere beatae odio maxime provident
								laudantium est non.`,
		address: `amaravati, andhra pradesh, india`,
	},
	{
		id: 2,
		img: campus2,
		icon: icon,
		location: 'Tamilnadu',
		info: `	Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
								minima, dolorum asperiores facere beatae odio maxime provident
								laudantium est non.`,
		address: `Tamilnadu, India`,
	},
	{
		id: 3,
		img: campus3,
		icon: icon,
		location: 'Bhopal',
		info: `	Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
								minima, dolorum asperiores facere beatae odio maxime provident
								laudantium est non.`,
		address: `Bhopal, India`,
	},
	{
		id: 4,
		img: campus4,
		icon: icon,
		location: 'Mumbai',
		info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
								minima, dolorum asperiores facere beatae odio maxime provident
								laudantium est non.`,
		address: `Mumbai, India`,
	},
];

export const courses = [
	{ id: 1, img: course1, text: `Chemical Engineering` },
	{ id: 2, img: course2, text: `Computer Applications` },
	{ id: 3, img: course3, text: `Mechanichal Engineering` },
	{ id: 4, img: course4, text: `Electrical Engineering` },
	{ id: 5, img: course5, text: `Computer science` },
	{ id: 6, img: course6, text: `Civil services` },
];
