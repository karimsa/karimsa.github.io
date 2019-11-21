import React, { useState } from 'react'

function SocialLink({ color, href, children, text = 'white' }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer noopener"
			className={`mr-2 text-${text} bg-${color} py-2 px-3 rounded-lg border-none`}
		>
			{children}
		</a>
	)
}

export function SocialIcons() {
	const [linkedinClicked, setLinkedInClicked] = useState()

	return (
		<div>
			<div className="text-center">
				<SocialLink href="https://github.com/karimsa" color="dark">
					<i className="fab fa-github" />
				</SocialLink>
				<SocialLink href="https://medium.com/@karimsa" color="success">
					<i className="fab fa-medium-m" />
				</SocialLink>
				<SocialLink href="https://twitter.com/@KarimSaNet" color="primary">
					<i className="fab fa-twitter" />
				</SocialLink>
				<SocialLink href="mailto:karim@alibhai.co" color="warning">
					<i className="fas fa-envelope" />
				</SocialLink>
				<SocialLink
					href="mailto:karim@alibhai.co"
					onClick={() => setLinkedInClicked(true)}
					color="secondary"
				>
					<i className="fab fa-linkedin-in" />
				</SocialLink>
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
