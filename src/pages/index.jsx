import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { SocialIcons } from '../components/social-icons'
import { AsyncComponent } from '../components/async-component'
import './index.css'

export default function IndexPage() {
	return (
		<Layout>
			<SEO title="Home" />

			<div className="row">
				<div className="col">
					<h1 className="text-center display-3 my-5">
						I'm an entrepreneur, developer, &amp; speaker. These days, I live at{' '}
						<a href="https://hirefast.ca">HireFast</a>.
					</h1>
				</div>
			</div>

			<div className="row mb-5 pb-5">
				<div className="col">
					<div className="card border-none shadow-sm p-md-5">
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
											summarized on a website. But I love my family{' '}
											<span role="img" aria-label="family">
												👨‍👩‍👧‍👦
											</span>
											, movies{' '}
											<span role="img" aria-label="popcorn">
												🍿
											</span>
											, politics{' '}
											<span role="img" aria-label="skull and cross bones">
												☠️
											</span>
											, and entrepreneurship{' '}
											<span role="img" aria-label="lightbulb">
												💡
											</span>
											. I love learning new things and also giving back whenever
											possible.
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
					<h3 className="text-success">My Projects</h3>
					<AsyncComponent
						getComponent={() => import('../components/github-projects')}
						fallback={
							<p className="my-5 text-center text-muted">Loading ...</p>
						}
					/>
				</div>
			</div>
		</Layout>
	)
}
