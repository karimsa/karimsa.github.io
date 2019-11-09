import React, { useState } from 'react'

function Technology({ label, image, onError }) {
	const [error, setError] = useState()
	return error ? (
		<p className="mb-0">{label}</p>
	) : (
		<img
			src={image}
			alt={label}
			className="img-fluid technology-image"
			onError={error => {
				setError(error)
				onError(error)
			}}
		/>
	)
}

function Technologies({ images }) {
	const [error, setError] = useState()
	return (
		<div className="row align-items-center justify-content-center pt-4 text-center text-md-left">
			{error && <p className="col-auto text-muted mb-0">Technologies:</p>}
			<div className="col">
				<div className="row">
					{images.map(([label, image], index) => (
						<div
							className={
								'col text-center d-flex align-items-center justify-content-center' +
								(index > 3 ? ' d-none d-md-flex' : '')
							}
							key={label}
						>
							<Technology label={label} image={image} onError={setError} />
						</div>
					))}
				</div>

				<div className="row d-md-none">
					{images.slice(3).map(([label, image]) => (
						<div
							className="col text-center d-flex align-items-center justify-content-center"
							key={label}
						>
							<Technology label={label} image={image} onError={setError} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

const colors = ['text-success', 'text-primary', 'text-warning', 'text-danger']

export function ProjectCard({ project, align, index }) {
	return (
		<React.Fragment>
			{index > 0 && (
				<div className="row mb-5 py-5">
					<div className="col">
						<hr className="border-primary" />
					</div>
				</div>
			)}

			<div className="row my-4 py-4">
				<div className="col">
					<div className="row">
						<div
							className={
								'col-12 col-md mb-5 mb-md-0' +
								(align === 'left' ? ' order-md-1' : '')
							}
						>
							<div>
								{project.preview && project.preview.image ? (
									<a
										href={project.preview.link}
										target="_blank"
										rel="noreferrer noopener"
									>
										<img
											src={project.preview.image}
											className="img-fluid rounded shadow-sm lift"
											alt="Preview for the project"
										/>
									</a>
								) : (
									<img
										src={project.preview}
										className="img-fluid rounded shadow-sm"
										alt="Preview for the project"
									/>
								)}

								{project.technologies && (
									<Technologies images={project.technologies} />
								)}
							</div>
						</div>
						<div className="col">
							<div className="text-center text-md-left">
								<h3
									className={
										'text-uppercase mb-1 ' + colors[index % colors.length]
									}
								>
									{project.name}
								</h3>
								{(project.github || project.website) && (
									<div className="mb-5">
										{project.github && (
											<a
												className="btn btn-dark lift mr-2"
												href={'https://github.com/' + project.github}
											>
												<i className="fab fa-github-square mr-1" /> Github
											</a>
										)}
										{project.website && (
											<a
												className="btn btn-primary lift mr-2"
												href={project.website}
											>
												<i className="fas fa-link mr-1" />
												Preview
											</a>
										)}
									</div>
								)}
								{project.description}
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
