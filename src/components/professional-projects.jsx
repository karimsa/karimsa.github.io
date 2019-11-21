import React from 'react'

import imRedis from '../images/redis.png'
import imgNodejs from '../images/nodejs.png'
import imgLua from '../images/lua.png'
import imgTypeScript from '../images/typescript.png'
import { ProjectCard } from '../components/project-card'
import { Features } from '../components/features'

const projects = [
	{
		name: 'PubSub Redesign',
		technologies: [['Redis', imRedis], ['Node.js', imgNodejs], ['Lua', imgLua]],
		description: (
			<React.Fragment>
				<div className="row">
					<div className="col">
						<p className="font-weight-bold text-uppercase text-danger">
							Problem (Technical)
						</p>
						<p>
							After onboarding two large customers, Foko Retail's pubsub
							architecture began to display a large number of issues.
							Specifically, every major action from one of our two big clients
							would trigger a{' '}
							<span className="text-danger">
								large number of real-time websocket events
							</span>{' '}
							which would cause our cluster of workers and our Redis deployment
							to run out of memory.
						</p>
						<p>
							This was happening even though we were using Redis PubSub which
							simply flushes data down network streams rather than holding it in
							memory. This meant that we were actually producing events faster
							than Redis could process them. Upon further investigation, it also
							became evident that{' '}
							<span className="text-danger">
								large quantities of the data was duplicated
							</span>{' '}
							- but the publishers were not aware of this.
						</p>
					</div>
					<div className="col">
						<p className="font-weight-bold text-uppercase text-danger">
							Problem (Non-technical)
						</p>
						<p>
							'Pub/Sub' is a software design pattern in which one piece of
							software publishes 'events' (such as "someone liked your post")
							and another piece of software acts as a subscriber, listening 👂🏽
							for events. We ran into issues when someone created a post for
							700+ people and suddenly there was hundreds of thousands of events
							being published instead of hundreds of events.
						</p>
						<p>
							Turns out, duplicating the same thing 1000x causes lots of memory
							usage. Who knew? 🤷‍♂️
						</p>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<p className="font-weight-bold text-uppercase text-primary">
							Solution (Technical)
						</p>
						<p>The middleware was designed to function as follows:</p>
						<ul>
							<li>
								On publish, events are hashed using a stable hashing algorithm.
							</li>
							<li>
								Each hash is assigned a reference counter, set to the number of
								subscribers receiving the event.
							</li>
							<li>
								Events are cached in redis, retrievable by hash. Hashes are
								published instead of events.
							</li>
							<li>
								<span className="text-primary">
									Hashing got rid of duplications
								</span>
								, as duplicate events would simply increase the ref counter
								instead of creating allocating more memory.
							</li>
							<li>
								Events are given a maximum TTL within which they must be
								retrieved by at least one subscriber.
							</li>
							<li>
								Subscribers atomically retrieve the event by hash, decrement the
								ref counter and push the expiry of the event object by a fixed
								timeslot.
							</li>
							<li>
								The subscriber that decrements the{' '}
								<span className="text-primary">
									counter to zero performs garbage collection
								</span>{' '}
								on the event. If no subscribers consume the event for a certain
								timespan, Redis would perform the garbage collection.
							</li>
							<li>
								Pub/Sub state was managed using Redis reliable queues instead of
								pure TCP Pub/Sub. This helped us avoid OOM on subscriber
								machines.
							</li>
						</ul>
					</div>
					<div className="col">
						<p className="font-weight-bold text-uppercase text-primary">
							Solution (Non-technical)
						</p>
						<p>
							Hashing is when a unique identifier is generated given a piece of
							data. This means that for every event we published, we first
							generated a unique identifier that allowed us to figure out when
							there was duplicate events 👥 and avoid copying memory.
						</p>
						<p>
							Garbage collection 🧹 is when memory that is no longer needed is
							cleaned up. In our case, when all subscribers had successfully
							processed the events, the event data was cleaned up.
						</p>
					</div>
				</div>
				<div className="text-center">
					<p className="font-weight-bold">Key accomplishments:</p>
					<Features
						align="center"
						features={[
							'Scaled architecture from supporting 1300 DAU** to 2000 DAU.',
							'Redis memory usage went from 30GB to 500MB (down by 98%).',
							'Increased service availability from 95%-tile to 99.9%-tile.',
						]}
					/>
					<p className="text-muted mb-0 small">* TTL = Time-to-Live</p>
					<p className="text-muted mb-0 small">** DAU = Daily Active Users</p>
				</div>
			</React.Fragment>
		),
	},
	{
		name: 'Eventually consistent material views',
		technologies: [['Redis', imRedis], ['Node.js', imgNodejs]],
		description: (
			<React.Fragment>
				<div className="row">
					<div className="col">
						<p className="font-weight-bold text-uppercase text-danger">
							Problem (Technical)
						</p>
						<p>
							A major feature that we released for some premium clients at Foko
							Retail involved{' '}
							<span className="text-danger">
								large amounts of denormalized data*
							</span>
							. As any developer that has worked with denormalized data knows,
							it's a huge pain to maintain. But it really helps to improve the
							read performance of applications as well as make certain UI
							features easier to implement.
						</p>
						<p>
							In SQL databases, this is often handled by using virtual or
							materialized views. However, virtual views do not take advantage
							of denormalization and therefore do not improve read performance.
							Material views on the other hand require recomputing the entire
							table on updates and therefore suffer from consistency issues.
						</p>
					</div>
					<div className="col">
						<p className="font-weight-bold text-uppercase text-danger">
							Problem (Non-technical)
						</p>
						<p>
							Let's take your Facebook feed as an example. Denormalizing data
							would be if Facebook stored your name in the User collection as
							well as inside of each Post that you create. This would help speed
							up your Facebook feed, since only the Post data needs to be
							loaded. But the problem is when you decide to change your name.
							The developer has to remember that all your posts need to be
							updated too.
						</p>
						<p>
							That's the problem with denormalized data. It causes developer
							headaches 🤕.
						</p>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<p className="font-weight-bold text-uppercase text-primary">
							Solution (Technical)
						</p>
						<p>
							To combat this, I designed an eventually consistent material view
							solution on top of our ORM**. This solution allowed us to{' '}
							<span className="text-primary">
								declaratively specify how each field of the material view should
								be computed
							</span>
							, and what relationships / cross-collection values the field
							dependend on. The middleware would then hook into all ORM-based
							updates and schedule partial view updates when certain changes
							occurred.
						</p>
						<p>
							This architecture allowed us to assume that the view was always
							up-to-date when designing API endpoints without having to worry
							about the maintainence overhead of manually keeping the view
							up-to-date.
						</p>
					</div>
					<div className="col">
						<p className="font-weight-bold text-uppercase text-primary">
							Solution (Non-technical)
						</p>
						<p>
							'Declaratively' means that as a developer, I can now just write
							code that says: "the user's name in a Post comes from the User
							collection". The system would then automatically update all the
							relevant Post data whenever a User's name is changed.
						</p>
						<p>It was like being introduced to Tylenol 💊.</p>
					</div>
				</div>

				<div className="text-center">
					<p className="font-weight-bold">Key accomplishments:</p>
					<Features
						align="center"
						features={[
							`Reduced human errors in updating denormalized data`,
							`Decreased the time it took us to develop the major feature from 1 month to 2 weeks`,
							`Decreased risk of shipping. We were able to ship without changing any pieces of business-critical code.`,
						]}
					/>
					<p className="text-muted mb-0 small">
						*denormalized data = when the same data is copied to multiple parts
						of the database
					</p>
					<p className="text-muted mb-0 small">
						**ORM = object-relational model; fancy term for the piece of
						software that manages our database
					</p>
				</div>
			</React.Fragment>
		),
	},
	{
		name: 'Distributed Circuit Breakers',
		technologies: [
			['Redis', imRedis],
			['Node.js', imgNodejs],
			['TypeScript', imgTypeScript],
		],
		description: (
			<React.Fragment>
				<div className="row">
					<div className="col">
						<p className="font-weight-bold text-uppercase text-danger">
							Problem (Technical)
						</p>
						<p>
							Every now and then, Foko Retail's API layer would have troubling
							issues commands against MongoDB, either due to high throughput or
							a failover, etc. This was not troubling since databases tend to be
							pretty resilient and spring back into action quickly.
						</p>
						<p>
							However, if this happened during prime business hours, users would
							beginning refreshing their pages to fix their temporary API
							failures. This large retry storm would actually take a 30s failure
							and cascade it into a 1 hour issue.
						</p>
					</div>
					<div className="col">
						<p className="font-weight-bold text-uppercase text-danger">
							Problem (Non-technical)
						</p>
						<p>
							When a database is already having trouble dealing with lots of
							queries, our application would show errors. When users saw these
							errors, they'd refresh the page and causes more queries to be run.
							Effectively, this was like beating up 🏏 the database while it was
							trying to recover.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<p className="font-weight-bold text-uppercase text-primary">
							Solution (Technical)
						</p>
						<p>
							Luckily, I had been working on an open source library as a side
							project during this time called{' '}
							<a href="https://github.com/karimsa/rsxjs">rsxjs</a>. Part of this
							project was a distributed circuit breaker component powered by
							Redis that would allow you to protect resources from retry storms.
						</p>
						<p>
							After deploying an rsxjs circuit breaker on top of our API layer,
							we were able to quickly catch when database issues were occuring
							and automatically fail our most expensive queries to shed some
							load. Since the breaker component was distributed, the entire API
							cluster would lock and unlock together, and our availability was
							back up.
						</p>
					</div>
					<div className="col">
						<p className="font-weight-bold text-uppercase text-primary">
							Solution (Non-technical)
						</p>
						<p>
							Circuit breakers are a piece of software that protects a resource
							that has been overloaded. For example, a circuit breaker that
							detects that the last 20 database queries have already failed will
							go into 'closed' mode 🚪 in which it will not let you send anymore
							queries to the database and instead error out.
						</p>
						<p>
							This acts as a shield to protect the database 🛡. This helps the
							database recover while sending errors to the user, which the user
							would see anyways. But after a certain amount of time, the breaker
							will allow a few queries to see if the database is back. At this
							point, it will either return to an open state or a closed state.
						</p>
					</div>
				</div>

				<div className="text-center">
					<p className="font-weight-bold">Key accomplishments:</p>
					<Features
						align="center"
						features={[
							'Decreased time-to-recovery from 1-hour to 1-minute (down by 98%).',
							'Increased availability during times of high usage.',
						]}
					/>
				</div>
			</React.Fragment>
		),
	},
]

export function ProfessionalProjects() {
	return projects.map((project, index) => (
		<ProjectCard
			key={project.name}
			project={project}
			index={index}
			length={projects.length}
			align={index % 2 ? 'left' : 'right'}
		/>
	))
}
