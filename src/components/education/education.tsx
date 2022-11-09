import { School } from './school';

export const Education = () => {
	return (
		<div className='mb-12'>
			<div className='mt-8'>
				<h2 className='my-4 font-extrabold leading-6 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-8 md:text-4xl md:leading-10'>
					Education 🎓
				</h2>
				<hr />
				<ul>
					<li className='my-4'>
						<School
							course='Software Engineering'
							school='Holberton School'
							from='Feb, 2022'
							to='March, 2023'
							description='The ALX Holberton Software Engineering programme is a 12-month(70h/week) immersive programme that engages technology enthusiasts and budding software engineers in a variety of programmes across in-demand tech disciplines to prepare them for a global career as a Full-Stack Developer.'
						/>
					</li>
					<li className='my-4'>
						<School
							course='Telecommunication and Information Engineering'
							school='Jomo Kenyatta University of Agriculture & Technology'
							from='Aug, 2018'
							to='Dec, 2023'
							description='A 5 year engineering course-work where I gained valuable skills in Electrical engineering, Computer engineering and RF engineering.
							I also gained valuable design and analysis skills to implemnt modern communication systems. I was able to aquire an in-depth knowledge on signals & systems, antenna theory, digital communication and network design and management.
							I was also a member of SES (Society of Engineering Students) which is acommunity of engineering students where we share ideas and help each other both academiccally and profeccionally'
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};
