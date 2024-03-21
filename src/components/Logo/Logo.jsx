import styles from './Logo.module.scss';

function Logo() {
	return (
		<div className={styles.logo}>
			<img className={styles.image} src="./public/vite.svg" alt="" />
			<span className={styles.title}>Travel the World</span>
		</div>
	);
}

export default Logo;
