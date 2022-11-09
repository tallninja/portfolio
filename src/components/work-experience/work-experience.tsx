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
							position='Junior Software Developer'
							company='Wikimedia Foundation'
							from='Sep, 2022'
							to='Present'
							description='Mainly tasked with verifying documentation of the media wiki platform
							and designing web based animation engine using WebGL and PHP.'
						/>
					</li>
					<li className='my-4'>
						<Experience
							position='Alpha Tester & Peer Mentor'
							company='DeepLearning.AI'
							from='Dec, 2021'
							to='Aug, 2022'
							description='Went through all the course materials and ensured that they were up
							to standards both technically and academically. I also addressed some of the students issues
							on the platform and mentored the on the courses they were undertaking on the platform'
						/>
					</li>
					<li className='my-4'>
						<Experience
							position='Software Engineer'
							type='internship'
							company='ICT Authority'
							from='Jan, 2022'
							to='May, 2022'
							description='Designed and implemented a school management system for one of the local
							schools. I designed both the frontend and backend. I also wrote tests for the whole syatem
							and managed the entire database.'
						/>
					</li>
					<li className='my-4'>
						<Experience
							position='Network Engineer'
							type='internship'
							company='United Nations'
							from='March, 2021'
							to='June, 2021'
							description='Mostly undertook network maintenance tasks at the United Nations Environmental Program
							offices. I was also tasked with ensuring that the server architecture was up to date and at per with
							standards. I was also tasked with training of enumerators on data collection using KoBo Collect.'
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};
