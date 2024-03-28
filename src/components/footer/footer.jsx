import './footer.scss';

export function Footer() {
	const scrollToTop = () => {
		document.querySelectorAll('.app')[0].scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className="footer_default">
			<div className="content">
				<h3 className="white center">Wirtualny Portfel</h3>
				<p className="white center w3">
					&#169; {new Date().getFullYear()} VirtualCash Inc. Wszystkie prawa
					zastrzeżone
				</p>
				<p
					style={{ userSelect: 'none', cursor: 'pointer' }}
					onClick={scrollToTop}
					className="white center"
				>
					Powrót na górę
				</p>
			</div>
		</footer>
	);
}
