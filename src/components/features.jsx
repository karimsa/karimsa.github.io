import React from 'react'

import imgCheck from '../images/check-circle.svg'

export function Features({ features }) {
	return (
		<div className="mt-4 text-center">
			{features.map(feature => (
				<p
					key={feature}
					className="d-flex align-items-center text-success justify-content-center"
				>
					<img className="mr-2" src={imgCheck} alt="✓" width="15" />
					<span>{feature}</span>
				</p>
			))}
		</div>
	)
}
