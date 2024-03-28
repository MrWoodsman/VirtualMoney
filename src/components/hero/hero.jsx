import './hero.scss';

export function Hero() {
	return (
		<section className="hero">
			<div className="content">
				<div className="text_wrap center">
					<h1 className="white center">Wirtualny Portfel</h1>
					<p className="white center">Dla twoich fizycznych pieniędzy</p>
				</div>
				<button>Jak to działa?</button>
			</div>
			<svg
				width="1440"
				height="121"
				viewBox="0 0 1440 121"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="hero_wave"
				preserveAspectRatio="none"
			>
				<path
					d="M1440 89.5958L1380 83.4023C1320 77.2089 1200 64.822 1080 77.2089C960 89.5957 840 126.756 720 114.369C600 101.983 480 40.0482 360 15.2744C240 -9.49937 120 2.88748 60 9.08092L9.24282e-06 15.2744L0 121L60 121C120 121 240 121 360 121C480 121 600 121 720 121C840 121 960 121 1080 121C1200 121 1320 121 1380 121L1440 121L1440 89.5958Z"
					fill="white"
					preserveAspectRatio="none"
				/>
			</svg>
		</section>
	);
}