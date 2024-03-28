import './App.scss';
import { Contact } from './components/contact/contact';
import { EasyStart } from './components/easyStart/easyStart';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Info } from './components/info/info';
import { Navbar } from './components/navbar/navbar';
import { TimeTracker } from './components/timeTracker/timeTracker';

function App() {
	return (
		<div className="app">
			<Navbar></Navbar>
			<Hero></Hero>
			<TimeTracker></TimeTracker>
			<Info></Info>
			<EasyStart></EasyStart>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
}

export default App;
