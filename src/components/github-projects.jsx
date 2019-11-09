import React from 'react'

import imgPatrol from '../images/patrol.png'
import imgGulpJslint from '../images/gulp-jslint.svg'
import imgRsxjs from '../images/rsxjs.png'
import imgRedis from '../images/redis.png'
import imgTS from '../images/typescript.png'
import imgDocker from '../images/docker.png'
import imgNodejs from '../images/nodejs.png'
import imgReact from '../images/react.png'
import imgJest from '../images/jest.png'
import imgGo from '../images/go.png'
import imgGulp from '../images/gulp.png'
import imgRedux from '../images/redux.png'
import imgBootstrap from '../images/bootstrap.png'
import { ProjectCard } from '../components/project-card'
import { Features } from '../components/features'

const projects = [
	{
		name: 'patrol',
		github: 'karimsa/patrol',
		website: 'http://status.hirefast.ca',
		preview: {
			image: imgPatrol,
			link: 'http://status.hirefast.ca',
		},
		technologies: [
			['Docker', imgDocker],
			['Node.js', imgNodejs],
			['React', imgReact],
			['Redux', imgRedux],
			['Bootstrap', imgBootstrap],
		],
		description: (
			<React.Fragment>
				<p>
					Patrol is a tool I've been working on to help developers spin up an
					entire statuspage service using a simple configuration file.
				</p>
				<p className="mb-0">
					Your configuration file simply specifies the services you're
					monitoring and how to check if they are healthy. Patrol takes care of
					scheduling regular service checks, maintaining the health history,
					rendering a web interface, and emitting notifications on
					success/failure.
				</p>
				<Features
					features={[
						'Used in production at HireFast',
						'Realtime updates with websockets',
						'Support for notifications via webhooks',
					]}
				/>
			</React.Fragment>
		),
	},
	{
		name: 'wiz',
		github: 'karimsa/wiz',
		website: 'https://wiz.js.org/',
		preview: {
			image: 'https://asciinema.org/a/KSaWyQ38IWnRNpVCEWCv0u3r4.svg',
			link: 'https://asciinema.org/a/KSaWyQ38IWnRNpVCEWCv0u3r4',
		},
		technologies: [['Node.js', imgNodejs], ['Jest', imgJest]],
		description: (
			<React.Fragment>
				<p>
					One of the toughest parts of working on a JS project these days is the
					configuration and setup that goes into scaffolding a new project. wiz
					is designed to be a zero-configuration build tool with opinionated
					defaults that helps you get started quickly.
				</p>
				<p className="mb-0">
					wiz provides a build command that transpiles, bundles, and minifies
					your sources. It also comes up a documentation generator, wraps jest
					with some good defaults, and a benchmark runner.
				</p>
				<Features
					features={[
						'Used in production at HireFast',
						'Lint project sources, generate docs sites, and write benchmarks.',
					]}
				/>
			</React.Fragment>
		),
	},
	{
		name: 'rsxjs',
		github: 'karimsa/rsxjs',
		preview: {
			image: imgRsxjs,
			link: 'https://github.com/karimsa/rsxjs',
		},
		technologies: [['TypeScript', imgTS], ['Redis', imgRedis]],
		description: (
			<React.Fragment>
				<p>
					A toolkit that makes it easy to incorporate resilient design patterns
					into JS/TS applications. We shipped code using this library at{' '}
					<a href="https://fokoretail.com">Foko Retail</a>.
				</p>
				<p className="mb-0">
					It includes lots of composable components such as circuit breakers,
					timeouts, and channels. All components store their state on Redis and
					are designed to be distributed by default. For instance, you can use a
					Redis-powered circuit breaker on the API layer to reject API requests
					allowing the underlying DB to cool off.
				</p>
				<Features
					features={[
						'Used in production at Foko Retail',
						'Used to serve over 3000 daily active users',
						'Used in production at HireFast',
					]}
				/>
			</React.Fragment>
		),
	},
	{
		name: 'basic',
		github: 'karimsa/basic',
		preview: {
			image: 'https://asciinema.org/a/ujAikO6L9wpwGsdp9S4Vsn4s7.svg',
			link: 'https://asciinema.org/a/ujAikO6L9wpwGsdp9S4Vsn4s7',
		},
		technologies: [['Go', imgGo]],
		description: (
			<React.Fragment>
				<p>
					Fun little experiment I worked on to study for my computer
					architecture exam.
				</p>
				<p className="mb-0">
					basic contains a VM and assembler for a Mano machine that accepts
					16-bit instructions (the instruction list is in the README).
				</p>
			</React.Fragment>
		),
	},
	{
		name: 'gulp-jslint',
		github: 'karimsa/gulp-jslint',
		preview: {
			image: imgGulpJslint,
			link: 'https://github.com/karimsa/gulp-jslint',
		},
		technologies: [['gulp', imgGulp]],
		description: (
			<React.Fragment>
				<p>The official JSLint plugin for the gulp ecosystem.</p>
				<p className="mb-0">
					My first "real" open source project. Pretty old now.
				</p>
			</React.Fragment>
		),
	},
]

export function GithubProjects() {
	return projects.map((project, index) => (
		<ProjectCard
			key={project.name}
			project={project}
			index={index}
			align={index % 2 ? 'left' : 'right'}
		/>
	))
}
