import React from 'react'

import imgGatsby from '../images/gatsby.svg'
import imgNetlify from '../images/netlify.svg'

export function Footer() {
	return (
		<footer className="p-5">
			<div className="container">
				<p className="text-muted text-center">
					Copyright &copy; {new Date().getFullYear()} Karim Alibhai.
				</p>
				<p className="text-muted text-center">
					Licensed under MIT license. Source on{' '}
					<a href="https://github.com/karimsa/karimsa.github.io">GitHub</a>.
				</p>
				<p className="text-center text-muted">
					Made with ❤️ and also{' '}
					<img src={imgGatsby} alt="Gatsby" className="img-fluid" />. Deployed
					with{' '}
					<img
						src={imgNetlify}
						alt="Netlify"
						className="img-fluid"
						style={{ height: '1.5rem' }}
					/>
					.
				</p>
			</div>
		</footer>
	)
}
