import { Card } from '../card';

export const FeaturedProjects = () => {
	return (
		<div className='mt-8'>
			<h2 className='my-4 font-extrabold leading-6 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-8 md:text-4xl md:leading-10'>
				Featured Projects 🏗
			</h2>
			<hr />
			<div className='container py-6'>
				<div className='flex flex-wrap -m-4'>
					<Card
						image={`${process.env.PUBLIC_URL}/img/test.png`}
						title='JScode'
						body='Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nulla id dolor orci. Donec quis tincidunt lacus.
						Sed ut auctor lacus, eu pellentesque neque. Aenean sit amet tortor
						vel ipsum tempus gravida. Nam sed ligula eget libero cursus
						vulputate. Nullam ornare augue ac ligula imperdiet semper vel ut
						justo. Proin nec magna semper est vulputate fringilla sed sed
						massa.'
					/>
					<Card
						image={`${process.env.PUBLIC_URL}/img/test.png`}
						title='JScode'
						body='Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nulla id dolor orci. Donec quis tincidunt lacus.
						Sed ut auctor lacus, eu pellentesque neque. Aenean sit amet tortor
						vel ipsum tempus gravida. Nam sed ligula eget libero cursus
						vulputate. Nullam ornare augue ac ligula imperdiet semper vel ut
						justo. Proin nec magna semper est vulputate fringilla sed sed
						massa.'
					/>
				</div>
			</div>
		</div>
	);
};
