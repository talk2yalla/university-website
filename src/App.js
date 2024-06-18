import Campus from './components/Campus';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Facilities from './components/Facilities';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Courses />
			<Campus />
			<Facilities />
			<Contact />
			<Footer />
		</>
	);
};
export default App;
