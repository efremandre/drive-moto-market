import { Link } from 'react-router-dom'
import logoImg from '/images/logo.svg'
import style from './logo.module.scss'

const Logo = () => {
	return (
		<Link className={style.logo} to='/home'>
			<img src={logoImg} alt="Logotype" />
		</Link>
	)
}

export default Logo