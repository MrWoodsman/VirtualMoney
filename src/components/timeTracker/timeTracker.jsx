import { useEffect, useState } from 'react';
import './timeTracker.scss';

import { eventDate } from '@/config';

import { motion } from "framer-motion"

export function TimeTracker() {
	const startDate = eventDate;

	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);

	function calculateTimeToEvent() {
		const t = new Date();
		let timeDif = startDate.getTime() - t.getTime();
		let days = Math.floor(timeDif / (1000 * 60 * 60 * 24));
		let hours = Math.floor((timeDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.ceil((timeDif % (1000 * 60 * 60)) / (1000 * 60));

		setDays(days);
		setHours(hours);
		setMinutes(minutes);
	}
	// calculateTimeToEvent();

	useEffect(() => {
		calculateTimeToEvent();
		const timeInterval = setInterval(() => {
			calculateTimeToEvent();
		}, 1000);

		return () => {
			clearInterval(timeInterval);
		};
	}, []);

	return (
		<section className="time_tracker">
			<div className="content">
				<div className="text_wrap center">
					<h1 className="center w9 italic upercase">Start Aplikacji</h1>
					<p className="center w4">Planowany start za</p>
				</div>
				<div className="clock_wrap">
					<div className="time_box">
						<h2>{String(days).padStart(2, '0')}</h2>
						<motion.p
							initial={{ y: 10, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: false }}
							transition={{ duration: .25, delay: .2 }}
							className="w9 acentColor">dni</motion.p>
					</div>
					<div className="time_box">
						<h2>{String(hours).padStart(2, '0')}</h2>
						<motion.p
							initial={{ y: 10, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: false }}
							transition={{ duration: .25, delay: .4 }}
							className="w9 acentColor">godzin</motion.p>
					</div>
					<div className="time_box">
						<h2>{String(minutes).padStart(2, '0')}</h2>
						<motion.p
							initial={{ y: 10, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: false }}
							transition={{ duration: .25, delay: .6 }}
							className="w9 acentColor">minut</motion.p>
					</div>
				</div>
			</div>
		</section>
	);
}
