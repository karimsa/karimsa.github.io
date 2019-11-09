import { useState, useEffect } from 'react'

export function useAsync(fn) {
	if (typeof fn !== 'function') {
		throw new Error(
			`Expected function to be passed to useAsync, got ${typeof fn}`,
		)
	}
	const [state, setState] = useState({})
	useEffect(
		() => {
			fn()
				.then(result => setState({ result }))
				.catch(error => setState({ error }))
		},
		// eslint-disable-next-line
	[Date]
	)
	return state
}
