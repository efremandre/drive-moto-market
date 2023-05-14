import styles from './buttons.module.scss'
import { Link } from 'react-router-dom'

const Buttons = () => {

	return (
		<div className={styles.buttons}>
			<button className={styles.buttons__like}></button>
			<Link className={styles.buttons__profile} to='/profile'></Link>
			<Link className={styles.buttons__cart} to='/cart'></Link>
		</div>
	)
}

export default Buttons