import './info.scss';

import { motion } from "framer-motion"

export function Info() {
	return (
		<section className="info_section">
			<div className="content">
				<motion.div
					initial={{ scaleY: 0, opacity: 0 }}
					whileInView={{ scaleY: 1, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: .25 }}
					className="text_wrap center">
					<h1 className="acentColor center">Nasz Świat Finansów</h1>
					<p className="black center">
						Odkryj, kontroluj, i osiągaj lepsze wyniki w swoich finansach dzięki
						naszej aplikacji.
					</p>
				</motion.div>
				<div className="info_wrap">
					<InfoBox
						title={'Wygodne zarządzanie budżetem'}
						text={
							'Łatwe zarządzanie finansami dzięki naszej aplikacji, która umożliwia kontrolę wydatków i dochodów oraz planowanie przyszłych transakcji. Znajdziesz tu wszystko, czego potrzebujesz, by śledzić stan swojego portfela w jednym miejscu, bez kłopotliwych procedur.'
						}
					/>
					<InfoBox
						reverse={true}
						title={'Proste dodawanie wydatków'}
						text={
							'Ułatw sobie codzienne śledzenie wydatków dzięki naszej aplikacji, która oferuje intuicyjny interfejs użytkownika. Dodawanie transakcji staje się łatwe i szybkie, a Ty możesz skupić się na swoich finansach, bez konieczności tracenia czasu na zawiłe operacje.'
						}
					/>
					<InfoBox
						title={'Inteligentne podsumowania'}
						text={
							'Otrzymuj wartościowe informacje dotyczące swoich finansów dzięki naszym inteligentnym podsumowaniom. Dzięki nim szybko poznasz swoje nawyki finansowe i uzyskasz cenne wskazówki, które pomogą Ci podejmować mądre decyzje finansowe.'
						}
					/>
				</div>
			</div>
		</section>
	);
}

function InfoBox({ reverse, title, text }) {
	const animationDirection = reverse ? "-100%" : "100%"
	return (
		<motion.div
			initial={{
				opacity: 0, x: animationDirection
			}}
			whileInView={{
				opacity: 1, x: 0
			}}
			viewport={{ once: false }}
			transition={{ duration: 1, delay: .1 }}
			className={reverse ? 'info_box reverse' : 'info_box'} >
			<div className="left">
				<h3 className="acentColor">{title}</h3>
				<p>{text}</p>
			</div>
			<div className="right">
				<div className="image_box"></div>
			</div>
		</motion.div >
	);
}
