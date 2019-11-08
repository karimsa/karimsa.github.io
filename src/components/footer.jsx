import React from 'react'

export function Footer() {
	return (
		<footer className="p-5">
			<div className="container">
				<p className="text-muted text-center">Copyright &copy; {new Date().getFullYear()} Karim Alibhai. Licensed under MIT license.</p>
			</div>
		</footer>
	)
}
