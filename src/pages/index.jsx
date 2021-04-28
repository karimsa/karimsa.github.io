// get away from gatsby as fast as possible
if (global.location) {
	location.href = `https://www.alibhai.co`
}

export default function IndexPage() {
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
			width: '100vw',
		}}>
			<p>Loading ...</p>
		</div>
	)
}

