import './hero.scss';

export const Hero = () => {
	return (
		<div className='divide-y'>
			<div className='pt-6 pb-8 space-y-2 md:space-y-5'>
				<h1 className='font-extrabold leading-9 tracking-wide text-white-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
					Ernest Wambua
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
				</div>
			</div>
		</div>
	);
};
