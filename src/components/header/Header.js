import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Volodymyr</em>
					</strong>
						<br />i'm a specializing in frontend development.
				</h1>
				<div className="header__text">
						<p>З прагненням до знань і натхненням до творчості</p>
				</div>
				<a href="#!" className="btn">
					 CV - по запиту 😀
				</a>
			</div>
		</header>
	);
}

export default Header;