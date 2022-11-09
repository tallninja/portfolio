import './hero.scss';

export const Hero = () => {
	return (
		<div className='divide-y'>
			<div className='pt-6 pb-4 sm:pb-2 space-y-2 md:space-y-5'>
				<h1 className='font-extrabold leading-9 tracking-wide text-white-900 sm:text-4xl sm:leading-9 md:text-6xl text-4xl'>
					Ernest Wambua &#128119;&#127998;
				</h1>
			</div>
			<div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
				<div className='flex flex-col items-center pt-8 space-x-2'>
					<span id='image-span'>
						<span id='image-overlay'>
							<img
								id='transparent-background'
								alt='transparent backdround'
								aria-hidden='true'
								src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMwIiBoZWlnaHQ9IjEzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
							/>
						</span>
						<img
							id='avatar'
							alt='avatar'
							src={`${process.env.PUBLIC_URL}/img/profile.png`}
							decoding='async'
							data-nimg='intrinsic'
							className='w-48 h-48 rounded-full'
						></img>
					</span>
					<div className='pt-4 text-gray-500 dark:text-gray-400'>
						Software Developer
					</div>
					<div className='text-gray-500 dark:text-gray-400'>
						Open To Work &#128515;
					</div>
					<div className='flex pt-6 space-x-3'>
						<i className='fa fa-envelope text-gray-200 text-xl dark:text-gray-400 hover:text-black hover:dark:text-white hover:text-2xl'></i>
						<i className='fa-brands fa-github text-xl text-gray-200 dark:text-gray-400 hover:text-black hover:dark:text-white hover:text-2xl'></i>
						<i className='fa-brands fa-twitter text-xl text-gray-200 dark:text-gray-400 hover:text-black hover:dark:text-white hover:text-2xl'></i>
						<i className='fa-brands fa-linkedin text-xl text-gray-200 dark:text-gray-400 hover:text-black hover:dark:text-white hover:text-2xl'></i>
						<i className='fa-brands fa-stack-overflow text-xl text-gray-200 dark:text-gray-400 hover:text-black hover:dark:text-white hover:text-2xl'></i>
					</div>
				</div>
				<div className='pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2'>
					<p>
						<span className='text-yellow-400 font-bold'>Hooray!!!</span> you
						made it to my portfolio website!
					</p>
					<p className='text-justify'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
						turpis sed dolor luctus egestas id at urna. Phasellus quis diam in
						urna luctus sollicitudin. In sed nunc non risus consequat feugiat.
						Quisque sed molestie dolor, placerat malesuada ipsum. Aliquam non
						turpis luctus, mollis mauris et, convallis libero. Ut convallis
						blandit mi, a ullamcorper ante facilisis vel. Ut eu erat et massa
						vulputate vestibulum at eget augue.
					</p>
					<p className='font-bold text-xl'>
						<span className='italic'>&#8220; Per Aspera Ad Astra &#8221;</span>{' '}
						&#128640;
					</p>
				</div>
			</div>
		</div>
	);
};
