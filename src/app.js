import Navbar from './components/navbar/navbar'
import Home from './views/home/home'
import Footer from './components/footer/footer'

import ServiziMain from './views/servizi_mainpage/servizi_mainpage'
import AboutUs from './views/about_us/about_us'

import ServiceMainCard from './components/serviceMainCard/serviceMainCard'

import Portfoliomore from './views/portfolio_more/portfolio_more'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

export default function App() {
	const { t } = useTranslation()

	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/full" element={<ServiceMainCard data={t('full', { returnObjects: true })} />} />
					<Route path="/individuals" element={<ServiceMainCard data={t('individuals', { returnObjects: true })} />} />
					<Route path="/companies" element={<ServiceMainCard data={t('companies', { returnObjects: true })} />} />
					<Route path="/design" element={<ServiceMainCard data={t('design', { returnObjects: true })} />} />
					<Route path="/support" element={<ServiceMainCard data={t('support', { returnObjects: true })} />} />
					<Route path="/contentcreation" element={<ServiceMainCard data={t('contentcreation', { returnObjects: true })} />} />
					<Route path="/marketing" element={<ServiceMainCard data={t('marketing', { returnObjects: true })} />} />
					<Route path="/social_media_management" element={<ServiceMainCard data={t('social_media_management', { returnObjects: true })} />} />
					<Route path="/app" element={<ServiceMainCard data={t('app', { returnObjects: true })} />} />
					<Route path="/videoludica" element={<ServiceMainCard data={t('videoludica', { returnObjects: true })} />} />
					<Route path="/servizi_mainpage" element={<ServiziMain />} />
					<Route path="/discover_more" element={<Portfoliomore />} />
					<Route path="/about_us" element={<AboutUs />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}
