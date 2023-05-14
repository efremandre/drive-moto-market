/* eslint-disable react/jsx-no-undef */
import Address from './address/Address'
import Buttons from './buttons/Buttons'
import styles from "./header.module.scss"
import Logo from "./logo/Logo"
import TopNavigation from "./topnavigation/TopNavigation"

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header__row}>
					<TopNavigation className={styles.header__navigation} />
					<Logo className={styles.header__logo} />
					<Address className={styles.header__address} />
					<Buttons className={styles.header__buttons} />
				</div>
			</div>
		</header>
	)
}

export default Header