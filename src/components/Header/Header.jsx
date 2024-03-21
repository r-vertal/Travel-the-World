import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.scss';

function Header() {
	return (
		<header>
			<div className={styles.menu}>
				<Logo />
				<Navigation />
			</div>
		</header>
	);
}

export default Header;
