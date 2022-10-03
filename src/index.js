import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import './i18n'

import Navbar from './components/navbar/navbar'
import Home from './views/home/home'
import Footer from './components/footer/footer'

import ServiziMain from './views/servizi_mainpage/servizi_mainpage'
import AboutUs from './views/about_us/about_us'

import ServiceMainCard from './components/serviceMainCard/serviceMainCard'

import Portfoliomore from './views/portfolio_more/portfolio_more'

// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// const rootElement = document.getElementById("root");

ReactDOM.render(
	<Suspense fallback={<div>Loading ~~~</div>}>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/full" element={<ServiceMainCard />} />
				<Route path="/individuals" element={<ServiceMainCard />} />
				<Route path="/companies" element={<ServiceMainCard />} />
				<Route path="/design" element={<ServiceMainCard />} />
				<Route path="/support" element={<ServiceMainCard />} />
				<Route path="/marketing" element={<ServiceMainCard />} />
				<Route path="/servizi_mainpage" element={<ServiziMain />} />
				<Route path="/contentcreation" element={<ServiceMainCard />} />
				<Route path="/discover_more" element={<Portfoliomore />} />
				<Route path="/about_us" element={<AboutUs />} />
				<Route path="/test" element={<ServiceMainCard />} />
				<Route path="/videoludica" element={<ServiceMainCard />} />
				<Route path="/creation_app" element={<ServiceMainCard />} />
				<Route path="/social_media_management" element={<ServiceMainCard />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	</Suspense>,
	document.getElementById('root')
)
