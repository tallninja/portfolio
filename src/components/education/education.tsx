import { School } from './school';

export const Education = () => {
	return (
		<div className='pb-16'>
			<div className='mb-12'>
				<div className='mt-8'>
					<h2 className='my-4 font-extrabold leading-6 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-8 md:text-4xl md:leading-10'>
						Education 🎓
					</h2>
					<hr />
					<ul>
						<li className='my-4'>
							<School
								course='Telecommunication and Information Engineering'
								school='Jomo Kenyatta University of Agriculture & Technology'
								from='Aug, 2018'
								to='Dec, 2023'
								description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Duis at turpis sed dolor luctus egestas id at urna. Phasellus quis diam
								in urna luctus sollicitudin. In sed nunc non risus consequat feugiat.'
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
