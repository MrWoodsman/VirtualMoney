import './App.scss';
import { Contact } from './components/contact/contact';
import { EasyStart } from './components/easyStart/easyStart';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Info } from './components/info/info';
import { Navbar } from './components/navbar/navbar';

function App() {
	return (
		<div className="app">
			<Navbar></Navbar>
			<Hero></Hero>
			<Info></Info>
			<EasyStart></EasyStart>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
}

export default App;
