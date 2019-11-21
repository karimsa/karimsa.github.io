import React from 'react'

import imgCheck from '../images/check-circle.svg'

export function Features({ features, align = 'left' }) {
	return (
		<div className={`mt-4 text-${align}`}>
			{features.map(feature => (
				<p
					key={feature}
					className={`d-flex align-items-center text-success justify-content-${
						align === 'left' ? 'start' : 'center'
					}`}
				>
					<img className="mr-2" src={imgCheck} alt="✓" width="15" />
					<span>{feature}</span>
				</p>
			))}
		</div>
	)
}
