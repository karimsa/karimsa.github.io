import React from 'react'
import { Link } from 'gatsby'

import imgLogo from '../images/icon.png'
import './navbar.css'

export function Navbar() {
	return (
		<div className="navbar navbar-light navbar-expand-md border-top-thick border-success">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img src={imgLogo} alt="KSA" className="img-fluid" width="60" />
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								🏡 Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/talks" className="nav-link">
								💡 Talks
							</Link>
						</li>
						<li className="nav-item">
							<a
								rel="noreferrer noopener"
								target="_blank"
								href="https://anchor.fm/TheStartupAddict"
								className="nav-link"
							>
								🎙 Podcast
							</a>
						</li>
						<li className="nav-item">
							<a
								rel="noreferrer noopener"
								target="_blank"
								href="https://medium.com/@karimsa"
								className="nav-link"
							>
								📖 Blog
							</a>
						</li>
						<li>
							<a
								rel="noreferrer noopener"
								target="_blank"
								href="https://docs.google.com/document/d/1jDXyyadzKLKR8cDJ1tiGaSL-ajmLxfQawYqZLawJ1-Y/edit?usp=sharing"
								className="nav-link"
							>
								🧗🏽‍♀️ Resume
							</a>
						</li>
						<li className="nav-item">
							<a
								rel="noreferrer noopener"
								target="_blank"
								href="mailto:karim@alibhai.co"
								className="nav-link"
							>
								💌 Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
