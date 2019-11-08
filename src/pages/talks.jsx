import React from "react"

import { Layout } from "../components/layout"
import SEO from "../components/seo"
import imgJsPerf from '../images/js-perf-1.png'
import imgResilient from '../images/rsx-talk.png'
import imgBreakMoreThings from '../images/cuhacking.png'
import imgTwilio from '../images/talk-twilio.png'
import imgOsh from '../images/talk-osh.png'

const talks = [
	{
		preview: imgJsPerf,
		name: 'JS Performance: State of the Art',
		description: `In this talk, I go over the basics of JS from the perspective of performance such as minification & compile-time macros. We'll have the look at the impact of heavy abstractions in JS & how to overcome them.`,
		location: `ForwardJS Ottawa (April 2019)`,
		slides: 'https://slides.com/karimalibhai/js-perf-2019',
		demo: 'https://github.com/karimsa/http-bench',
	},
	{
		preview: imgResilient,
		name: 'Building More Resilient Applications',
		description: `"Sorry, try again later." We're all used to adding this bit to our applications. But our users deserve better. What if we chose to embrace failure instead of avoiding it? In this talk, we go over eventual consistency & its importance to JS applications.`,
		location: `OttawaJS (July 2018)`,
		video: 'https://www.youtube.com/watch?v=5UBEo2i6GUA',
		slides: 'https://slides.com/karimalibhai/resilient-design-p2',
	},
	{
		preview: imgBreakMoreThings,
		name: 'Break More Things (Workshop)',
		description: `A workshop about resiliency patterns & failure injection in Node.js.`,
		location: `cuHacking (March 2018)`,
		slides: 'https://slides.com/karimalibhai/chaos-workshop',
	},
	{
		preview: imgTwilio,
		name: 'Mad Science with Twilio',
		description: `Twilio, an up-and-coming company that provides VoIP as a Service, is used typically to build chat bots and for notification automation. But don't you wish you could do more.. like listen to music in real-time without the internet?`,
		location: `University of Ottawa / Lightning Talks (February 2017)`,
		slides: 'https://slides.com/karimalibhai/twilio',
	},
	{
		preview: imgOsh,
		name: 'When you learn to code',
		description: `Tidbits on my journey of learning to code. Presented for the students of an after-school Computer Science club in Osh.`,
		location: `Osh, Tajikistan (November 2016)`,
		slides: 'https://slides.com/karimalibhai/learn-to-code',
	},
]

function TalkCard({ talk }) {
	return (
		<div className="col d-flex">
			<div className="card">
				<img src={talk.preview} className="img-fluid" alt="" />
				<div className="card-body">
					<h3>{talk.name}</h3>
					<p className="text-muted">{talk.location}</p>
					<p className="mb-0">{talk.description}</p>
				</div>
				<div className="card-footer bg-white">
					{talk.video && <a href={talk.video} className="mr-2">Video</a>}
					{talk.slides && <a href={talk.slides} className="mr-2">Slides</a>}
					{talk.demo && <a href={talk.demo}>Demo</a>}
				</div>
			</div>
		</div>
	)
}

export default function TalksPage() {
  return <Layout>
    <SEO title="Home" />
    
    <div className="row py-5">
		<div className="col">
			<h1 className="text-center">I enjoy speaking at places. Here's some of the work I've done.</h1>
		</div>
	</div>

	<div className="row mb-5">
		<TalkCard talk={talks[0]} />
		<TalkCard talk={talks[1]} />
		<TalkCard talk={talks[2]} />
	</div>
	<div className="row">
		<TalkCard talk={talks[3]} />
		<TalkCard talk={talks[4]} />
	</div>
  </Layout>
}
