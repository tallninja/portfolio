import { Card } from '../card';

export const FeaturedProjects = () => {
	return (
		<div className='mt-8'>
			<div className='flex align-baseline justify-between my-4'>
				<h2 className='font-extrabold leading-6 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-8 md:text-4xl md:leading-10'>
					Featured Projects 🏗
				</h2>
				<a
					href='https://github.com/tallninja'
					className='text-base font-medium leading-6 text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400'
				>
					All projects →
				</a>
			</div>
			<hr />
			<div className='container py-6'>
				<div className='flex flex-wrap -m-4'>
					<Card
						image={`${process.env.PUBLIC_URL}/img/tusafiri.png`}
						title='Tusafiri'
						body='This is a web based bus booking system which i created using MERN stack.
						A user is able to book a bus seat and select the desired seat and still get to
						pay for the seats all from the comfort of their home. The need for such a system
						arose from the chaotic state of buses popularly known as "matatus" here in Kenya.
						This system will ensure that a user gets what they paid for. This system can also help
						bus companies when they want to assign drivers to buses. The system automatically does
						that based on previous trips the driver has made.'
					/>
					<Card
						image={`${process.env.PUBLIC_URL}/img/jscode.png`}
						title='JScode'
						body='JScode is a web based JavaScript code transpiler. The motivation for the project
						arose from the desire to have a "Jupyter Notebook" but for JS developers. I worked on if
						for a whole weekend and I was able to come up with a prety descent implementation. A user
						can insers code cells or text cells and they can easily document their code as they are writing
						it. You can even import any package and it will automatically fetch it from the NPM registry
						and bundle your code. The tech stack used was ReactJS, Typescript, esbuild and Jest.'
					/>
				</div>
			</div>
		</div>
	);
};
