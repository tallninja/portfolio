export const TechStack = () => {
	return (
		<div className='mb-12'>
			<div className='mt-8'>
				<h2 className='my-4 font-extrabold leading-6 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-8 md:text-4xl md:leading-10'>
					Languages & Frameworks
				</h2>
				<hr />
				<div className='mt-8 grid grid-cols-3 md:flex flex-col justify-between items-center sm:flex-row'>
					<div className='p-3'>
						<img
							src={`${process.env.PUBLIC_URL}/img/python.png`}
							alt='Python Logo'
							className='grayscale hover:grayscale-0'
						/>
					</div>
					<div className='p-3'>
						<img
							src={`${process.env.PUBLIC_URL}/img/typescript.png`}
							alt='Typescript Logo'
							className='grayscale hover:grayscale-0'
						/>
					</div>
					<div className='p-3'>
						<img
							src={`${process.env.PUBLIC_URL}/img/js.png`}
							alt='Javascript Logo'
							className='grayscale hover:grayscale-0'
						/>
					</div>
					<div className='p-3'>
						<img
							src={`${process.env.PUBLIC_URL}/img/java.png`}
							alt='Java Logo'
							className='grayscale hover:grayscale-0'
						/>
					</div>
					<div className='p-3'>
						<img
							src={`${process.env.PUBLIC_URL}/img/cpp.png`}
							alt='Cpp Logo'
							className='grayscale hover:grayscale-0'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
