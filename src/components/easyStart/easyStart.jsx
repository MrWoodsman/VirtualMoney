import './easyStart.scss';

export function EasyStart() {
	return (
		<section className="easy_start">
			<svg
				className="wave"
				width="1440"
				height="118"
				viewBox="0 0 1440 118"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{ transform: 'translateY(1px)' }}
				preserveAspectRatio="none"
			>
				<path
					d="M0 0L48 24C96 48 192 96 288 102C384 108 480 72 576 72C672 72 768 108 864 96C960 84 1056 24 1152 12C1248 0 1344 36 1392 54L1440 72V118H1392C1344 118 1248 118 1152 118C1056 118 960 118 864 118C768 118 672 118 576 118C480 118 384 118 288 118C192 118 96 118 48 118H0V0Z"
					fill="#47B258"
					preserveAspectRatio="none"
				/>
			</svg>

			<div className="main_compnent">
				<div className="content">
					<div className="text_wrap center">
						<h1 className="white center">Start w 3 prostych krokach</h1>
						<p className="white center w3">
							Zacznij korzystać z platformy w trzech bardzo prostych krokach.
						</p>
					</div>

					<div className="steps_wrap">
						<StepBox
							num={1}
							text={'Pobierz aplikacje lub korzystaj z niej na stronie internetowej'}
						/>
						<StepBox
							num={2}
							text={
								'Dodaj swój portfel nazwij go tak jak ci się podoba tak żeby było ci wygodnie'
							}
						/>
						<StepBox
							num={3}
							text={'Zacznij dodawać swoje środki i wydatki, oszczędzając czas'}
						/>
					</div>
				</div>
			</div>

			<svg
				className="wave"
				width="1440"
				height="186"
				viewBox="0 0 1440 186"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{ transform: 'translateY(-1px)' }}
				preserveAspectRatio="none"
			>
				<path
					d="M1440 186L1380 157.238C1320 128.476 1200 70.9524 1080 63.7619C960 56.5714 840 99.7143 720 92.5238C600 85.3333 480 27.8095 360 27.8095C240 27.8095 120 85.3333 60 114.095L3.77167e-06 142.857L1.62606e-05 -3.81849e-06L60 1.42688e-06C120 6.67225e-06 240 1.7163e-05 360 2.76537e-05C480 3.81444e-05 600 4.86352e-05 720 5.91259e-05C840 6.96166e-05 960 8.01074e-05 1080 9.05981e-05C1200 0.000101089 1320 0.00011158 1380 0.000116825L1440 0.00012207L1440 186Z"
					fill="#47B258"
					preserveAspectRatio="none"
				/>
			</svg>
		</section>
	);
}

function StepBox({ num, text }) {
	return (
		<div className="step_wrap">
			<div>
				<h1 className="step_number white center">{num}</h1>
			</div>
			<p className="step_text white w3">{text}</p>
		</div>
	);
}
