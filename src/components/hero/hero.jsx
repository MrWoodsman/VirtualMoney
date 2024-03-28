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
				className="hero_wave"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				preserveAspectRatio="none"
				viewBox="0 0 1440 121"
			>
				<path
					fill="#fff"
					d="m1440 89.5958-60-6.1935c-60-6.1934-180-18.5803-300-6.1934-120 12.3868-240 49.5471-360 37.1601-120-12.386-240-74.3208-360-99.0946C240-9.49937 120 2.88748 60 9.08092L.00000924 15.2744 0 121h1440V89.5958Z"
					preserveAspectRatio="none"
				/>
			</svg>
		</section>
	);
}
