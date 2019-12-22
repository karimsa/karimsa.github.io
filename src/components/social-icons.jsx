import React, { useState } from 'react'

function SocialLink({
	color,
	href,
	children,
	target = '_blank',
	text = 'white',
	onClick,
}) {
	return (
		<a
			href={href}
			target={target}
			rel="noreferrer noopener"
			className={`mr-2 text-${text} bg-${color} py-2 px-3 rounded-lg border-none lift`}
			onClick={onClick}
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
					href="#"
					onClick={evt => {
						evt.preventDefault()
						setLinkedInClicked(true)
					}}
					color="secondary"
				>
					<i className="fab fa-linkedin-in" />
				</SocialLink>
			</div>
			{linkedinClicked && (
				<p className="text-muted text-center mt-4">
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
