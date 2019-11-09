import React from 'react'

import { useAsync } from '../state'

export function AsyncComponent({ getComponent, fallback }) {
	const state = useAsync(getComponent)
	if (state.result) {
		for (const key in state.result) {
			const Component = state.result[key]
			return <Component />
		}
		throw new Error(`Failed to find component in module`)
	}
	if (fallback) {
		return fallback
	}
	return null
}
