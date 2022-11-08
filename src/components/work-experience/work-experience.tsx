import { Experience } from './experience';

export const WorkExperience = () => {
	return (
		<div className='mb-16'>
			<div className='mt-8'>
				<h2 className='my-4 font-extrabold leading-6 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-8 md:text-4xl md:leading-10'>
					Work Experience &#128736;
				</h2>
				<hr />
				<ul>
					<li className='my-4'>
						<Experience
							position='Software Engineer'
							type='internship'
							company='ICT Authority'
							from='Jan, 2022'
							to='May, 2022'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Duis at turpis sed dolor luctus egestas id at urna. Phasellus quis diam
								in urna luctus sollicitudin. In sed nunc non risus consequat feugiat.'
						/>
					</li>
					<li className='my-4'>
						<Experience
							position='Network Engineer'
							type='internship'
							company='United Nations'
							from='March, 2021'
							to='June, 2021'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Duis at turpis sed dolor luctus egestas id at urna. Phasellus quis diam
								in urna luctus sollicitudin. In sed nunc non risus consequat feugiat.'
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};
