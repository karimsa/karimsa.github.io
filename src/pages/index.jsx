import React, { useState } from "react"
import '@fortawesome/fontawesome-free/css/all.min.css'

import {Layout} from "../components/layout"
import SEO from "../components/seo"
import imgPatrol from '../images/patrol.png'
import imgGulpJslint from '../images/gulp-jslint.svg'
import imgRsxjs from '../images/rsxjs.png'
import imgCheck from '../images/check-circle.svg'
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
import './index.css'

function Features({ features }) {
  return (
    <div className="mt-4 text-center">
      {features.map(feature => (
        <p key={feature} className="d-flex align-items-center text-success">
          <img className="mr-2" src={imgCheck} alt="✓" width="15" />
          <span>{feature}</span>
        </p>
      ))}
    </div>
  )
}

function Technology({ label, image, onError }) {
  const [error, setError] = useState()
  return (
    error ?
      <p className="mb-0">{label}</p> :
      <img src={image} alt={label} className="img-fluid technology-image" onError={error => {
        setError(error)
        onError(error)
      }} />
  )
}

function Technologies({ images }) {
  const [error, setError] = useState()
  return (
    <div className="row align-items-center justify-content-center pt-4">
      {error && <p className="col-auto text-muted mb-0">Technologies:</p>}
      {images.map(([label, image]) => (
        <div class="col text-center" key={label}>
          <Technology label={label} image={image} onError={setError} />
        </div>
      ))}
    </div>
  )
}

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
      ['Redux', imgBootstrap],
    ],
    description: (
      <React.Fragment>
        <p>Patrol is a tool I've been working on to help developers spin up an entire statuspage service using a simple configuration file.</p>
        <p className="mb-0">Your configuration file simply specifies the services you're monitoring and how to check if they are healthy. Patrol takes care of scheduling regular service checks, maintaining the health history, rendering a web interface, and emitting notifications on success/failure.</p>
        <Features features={[
          'Used in production at HireFast',
        ]} />
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
    technologies: [
      ['Node.js', imgNodejs],
      ['Jest', imgJest],
    ],
    description: (
      <React.Fragment>
        <p>One of the toughest parts of working on a JS project these days is the configuration and setup that goes into scaffolding a new project. wiz is designed to be a zero-configuration build tool with opinionated defaults that helps you get started quickly.</p>
        <p className="mb-0">wiz provides a build command that transpiles, bundles, and minifies your sources. It also comes up a documentation generator, wraps jest with some good defaults, and a benchmark runner.</p>
        <Features features={[
          'Used in production at HireFast',
        ]} />
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
    technologies: [
      ['TypeScript', imgTS],
      ['Redis', imgRedis],
    ],
    description: (
      <React.Fragment>
        <p>A toolkit that makes it easy to incorporate resilient design patterns into JS/TS applications. We shipped code using this library at <a href="https://fokoretail.com">Foko Retail</a>.</p>
        <p className="mb-0">It includes lots of composable components such as circuit breakers, timeouts, and channels. All components store their state on Redis and are designed to be distributed by default. For instance, you can use a Redis-powered circuit breaker on the API layer to reject API requests allowing the underlying DB to cool off.</p>
        <Features features={[
          'Used in production at Foko Retail',
          'Used to serve over 3000 daily active users',
          'Used in production at HireFast',
        ]} />
      </React.Fragment>
    ),
  },
  {
    name: 'basic',
    github: 'karimsa/basic',
    preview: {
      image: 'https://asciinema.org/a/ujAikO6L9wpwGsdp9S4Vsn4s7.svg',
      link: 'https://asciinema.org/a/ujAikO6L9wpwGsdp9S4Vsn4s7'
    },
    technologies: [
      ['Go', imgGo],
    ],
    description: (
      <React.Fragment>
        <p>Fun little experiment I worked on to study for my computer architecture exam.</p>
        <p className="mb-0">basic contains a VM and assembler for a Mano machine that accepts 16-bit instructions (the instruction list is in the README).</p>
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
    technologies: [
      ['gulp', imgGulp],
    ],
    description: (
      <React.Fragment>
        <p>The official JSLint plugin for the gulp ecosystem.</p>
        <p className="mb-0">My first "real" open source project. Pretty old now.</p>
      </React.Fragment>
    ),
  },
]

const colors = [
  'text-success',
  'text-primary',
  'text-warning',
  'text-danger',
]

function ProjectCard({ project, align, index }) {
  return (
    <div className="row my-4 py-4">
      <div className="col">
        {index > 0 && <div className="row mb-5 py-5">
          <div className="col">
            <hr className="border-primary" />
          </div>
        </div>}

        <div className="row">
          <div className={"col d-flex align-items-center" + (align === 'left' ? ' order-md-1' : '')}>
            <div>
              {project.preview && project.preview.image ? (
                <a href={project.preview.link} target="_blank" rel="noreferrer noopener">
                  <img src={project.preview.image} className="img-fluid rounded shadow-sm lift" alt="Preview for the project" />
                </a>
              ) : (
                <img src={project.preview} className="img-fluid rounded shadow-sm" alt="Preview for the project" />
              )}
            </div>
          </div>
          <div className="col">
            <div>
              <h3 className={"text-uppercase mb-4 " + (colors[index % colors.length])}>{project.name}</h3>
              {(project.github || project.website) && <p>
                {project.github && <a className="btn btn-dark lift mr-2" href={'https://github.com/' + project.github}><i className="fab fa-github-square mr-1" /> Github</a>}
                {project.website && <a className="btn btn-primary lift mr-2" href={project.website}><i className="fas fa-link mr-1" />Preview</a>}
              </p>}
              {project.description}
            </div>
          </div>
        </div>

        {project.technologies && (
          <Technologies images={project.technologies} />
        )}
      </div>
    </div>
  )
}

export default function IndexPage() {
  return <Layout>
    <SEO title="Home" />
    
    <div className="row">
      <div className="col">
        <h1 className="text-center display-1 mt-5 pt-5">I'm an entrepreneur, developer, &amp; speaker. These days, I live at <a href="https://hirefast.ca">HireFast</a>.</h1>
      </div>
    </div>

    <div className="row my-5 py-5">
      <div className="col">
        <div className="card border-none shadow-sm p-5">
          <div className="card-body">
            <div className="row">
              <div className="col d-flex align-items-center justify-content-center">
                <img src="https://www.gravatar.com/avatar/0a1d24b4dddc47282cdc22f47ac4dd02?s=500" className="img-fluid rounded shadow-sm border-primary border-thick" alt="my face" />
              </div>

              <div className="col d-flex align-items-center justify-content-center">
                <div>
                  <h3 className="text-primary text-uppercase">About</h3>
                  <p className="lead">I'm a complex collection of life experiences and can't be summarized on a website. But I love my family <span role="img" aria-label="family">👨‍👩‍👧‍👦</span>, movies <span role="img" aria-label="popcorn">🍿</span>, politics <span role="img" aria-label="skull and cross bones">☠️</span>, and entrepreneurship <span role="img" aria-label="lightbulb">💡</span>. I love learning new things and also giving back whenever possible.</p>
                  <p className="lead mb-0">I'm also always open to meeting new people - so feel free to send me unsolicited solicitations and we can chat over coffee <span role="img" aria-label="coffee cup">☕️</span>.</p>
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
        {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} align={index % 2 ? 'left' : 'right'} />)}
      </div>
    </div>
  </Layout>
}
