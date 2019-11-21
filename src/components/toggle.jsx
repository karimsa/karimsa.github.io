import React from 'react'

import './toggle.css'

export function Toggle({ enabled, setEnabled, offColor, onColor }) {
	return (
		<div
			className={
				'toggle ' + (enabled ? 'toggle-on bg-' + onColor : 'bg-' + offColor)
			}
			onClick={() => setEnabled(!enabled)}
		>
			<div className="toggle-switch"></div>
		</div>
	)
}
