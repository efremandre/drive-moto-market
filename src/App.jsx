import 'react'
import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom'
import '../node_modules/normalize.css/'
import './assets/style/global.scss'
import Header from './components/screens/header/Header.jsx'
import Home from './components/screens/home/Home.jsx'
import Pageplug from './components/screens/pageplug/Pageplug'

const App = () => {

	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/home" element={<Home />} />
					<Route exact path="/markets" element={<Pageplug />} />
					<Route exact path="/actions" element={<Pageplug />} />
					<Route exact path="/pay" element={<Pageplug />} />
					<Route exact path="/profile" element={<Pageplug />} />
					<Route exact path="/cart" element={<Pageplug />} />
				</Routes>
			</main>
		</BrowserRouter>
	)
}

export default App