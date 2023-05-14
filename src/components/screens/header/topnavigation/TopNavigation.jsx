import styles from "./topnavigation.module.scss"
import { Link } from 'react-router-dom'

const TopNavigation = () => {
	const items = [
		{ id: 1, name: 'Магазины', href: '/markets' },
		{ id: 2, name: 'Акции', href: '/actions' },
		{ id: 3, name: 'Доставка и оплата', href: '/pay' },
	]

	return (
		<ul className={styles.list}>
			{items.map(item =>
				<li key={item.id}><Link to={item.href} className={styles.list__link}>{item.name}</Link></li>)}
		</ul>
	)
}

export default TopNavigation