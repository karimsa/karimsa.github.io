import React, { useState } from 'react'

export function SocialIcons() {
	const [linkedinClicked, setLinkedInClicked] = useState()

	return (
		<div>
			<div className="text-center">
				<a
					href="https://github.com/karimsa"
					target="_blank"
					rel="noreferrer noopener"
					className="display-4 display-md-1 mr-2"
				>
					<i className="fab fa-github-square" />
				</a>
				<a
					href="mailto:karim@alibhai.co"
					target="_blank"
					rel="noreferrer noopener"
					className="display-4 display-md-1 mr-2"
				>
					<i className="fas fa-envelope-square" />
				</a>
				<a
					href="https://medium.com/@karimsa"
					target="_blank"
					rel="noreferrer noopener"
					className="display-4 display-md-1 mr-2 rounded overflow-hidden"
				>
					<i className="fab fa-medium" />
				</a>
				<a
					href="https://twitter.com/@KarimSaNet"
					target="_blank"
					rel="noreferrer noopener"
					className="display-4 display-md-1 mr-2"
				>
					<i className="fab fa-twitter-square" />
				</a>
				<button
					type="button"
					className="bg-none border-none p-0 display-4 display-md-1 mr-2 text-muted"
					onClick={() => setLinkedInClicked(true)}
				>
					<i className="fab fa-linkedin" />
				</button>
			</div>
			{linkedinClicked && (
				<p className="text-muted text-center">
					Developers don't use LinkedIn anymore. Checkout{' '}
					<a
						href="https://hirefast.ca"
						rel="noreferrer noopener"
						target="_blank"
					>
						HireFast
					</a>{' '}
					to hire developers from GitHub instead.
				</p>
			)}
		</div>
	)
}
