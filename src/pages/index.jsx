import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { SocialIcons } from '../components/social-icons'
import { AsyncComponent } from '../components/async-component'
import { Toggle } from '../components/toggle'
import imgEvenhandTeam from '../images/evenhand-team.png'
import './index.css'

export default function IndexPage() {
	const [showOSSWork, setShowOSSWork] = useState(false)

	return (
		<Layout>
			<SEO title="Home" />

			<div
				className="modal fade"
				id="rhok-ottawa-modal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								RHoK Ottawa 2019
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<img
								src={imgEvenhandTeam}
								className="img-fluid"
								alt="Team photo with EvenHand"
								title="Team photo with EvenHand"
							/>
							<p className="mb-0 text-muted text-center pt-2">
								EvenHand Team @{' '}
								<a
									rel="noreferrer noopener"
									target="_blank"
									href="https://rhok.ca/"
								>
									RHoK Ottawa 2019
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col">
					<h1 className="text-center display-3 my-5 bg-primary p-4 rounded-lg text-white">
						I'm an entrepreneur, developer, &amp; speaker. These days, I live at{' '}
						<a className="text-white" href="https://hirefast.ca">
							HireFast
						</a>
						.
					</h1>
				</div>
			</div>

			<div className="row mb-5 pb-5">
				<div className="col">
					<div className="card border-none p-md-5">
						<div className="card-body">
							<div className="row">
								<div className="col-12 col-md d-flex align-items-center justify-content-center mb-5">
									<img
										src="https://www.gravatar.com/avatar/0a1d24b4dddc47282cdc22f47ac4dd02?s=500"
										className="img-fluid rounded shadow-sm border-primary border-thick"
										alt="my face"
									/>
								</div>

								<div className="col d-flex align-items-center justify-content-center">
									<div className="text-center text-md-left">
										<h3 className="text-primary text-uppercase">About</h3>
										<p className="lead">
											I'm a complex collection of life experiences and can't be
											summarized on a website.
										</p>
										<p className="lead">Stuff I love ❤️:</p>
										<ul>
											<li>
												my family{' '}
												<span role="img" aria-label="family">
													👨‍👩‍👧‍👦
												</span>
											</li>
											<li>
												movies{' '}
												<span role="img" aria-label="popcorn">
													🍿
												</span>
											</li>
											<li>
												entrepreneurship{' '}
												<span role="img" aria-label="lightbulb">
													💡
												</span>
											</li>
											<li>
												politics{' '}
												<span role="img" aria-label="skull and cross bones">
													☠️
												</span>
											</li>
										</ul>
										<p className="lead">
											I love learning new things and also{' '}
											<a href="#rhok-ottawa-modal" data-toggle="modal">
												giving back whenever possible
											</a>
											.
										</p>
										<p className="lead mb-0">
											I'm also always open to meeting new people - so feel free
											to send me unsolicited solicitations and we can chat over
											coffee{' '}
											<span role="img" aria-label="coffee cup">
												☕️
											</span>
											.
										</p>
										<div className="pt-5">
											<SocialIcons />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row my-5 py-5">
				<div className="col">
					<h3 className="text-success text-center">My Projects</h3>
					<div className="d-flex align-items-center justify-content-center">
						<span>Professional</span>
						<div className="mx-2">
							<Toggle
								enabled={showOSSWork}
								setEnabled={setShowOSSWork}
								offColor="primary"
								onColor="success"
							/>
						</div>
						<span>Open source</span>
					</div>
					<div className={showOSSWork ? 'd-none' : ''}>
						<AsyncComponent
							getComponent={() => import('../components/professional-projects')}
							fallback={
								<p className="my-5 text-center text-muted">Loading ...</p>
							}
						/>
					</div>
					<div className={showOSSWork ? '' : 'd-none'}>
						<AsyncComponent
							getComponent={() => import('../components/github-projects')}
							fallback={
								<p className="my-5 text-center text-muted">Loading ...</p>
							}
						/>
					</div>
				</div>
			</div>
		</Layout>
	)
}
