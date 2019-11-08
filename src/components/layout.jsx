import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

import { Navbar } from './navbar'
import { Footer } from './footer'

export function Layout({ children }) {
	return (
		<React.Fragment>
			<Navbar />
			<main className="container">
				{children}
			</main>
			<Footer />
		</React.Fragment>
	)
}
