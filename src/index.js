import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import './i18n'

import App from './app'

ReactDOM.render(
	<Suspense fallback={<div>Loading ~~~</div>}>
			<App/>
	</Suspense>,
	document.getElementById('root')
)
