import React from 'react'
import { Link } from 'gatsby'

import imgLogo from '../images/icon.png'
import './navbar.css'

export function Navbar() {
	return (
		<div className="navbar navbar-light navbar-expand-md">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img src={imgLogo} alt="KSA" className="img-fluid" width="60" />
				</Link>

				<div className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link">Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/talks" className="nav-link">Talks</Link>
						</li>
						<li className="nav-item">
							<a rel="noreferrer noopener" target="_blank" href="https://anchor.fm/TheStartupAddict" className="nav-link">Podcast</a>
						</li>
						<li className="nav-item">
							<a rel="noreferrer noopener" target="_blank" href="https://medium.com/@karimsa" className="nav-link">Blog</a>
						</li>
						<li className="nav-item">
							<a rel="noreferrer noopener" target="_blank" href="mailto:karim@alibhai.co" className="nav-link">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
