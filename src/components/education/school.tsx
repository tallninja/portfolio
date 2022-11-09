interface SchoolProps {
	course: string;
	school: string;
	from: string;
	to: string;
	description: string;
}

export const School: React.FC<SchoolProps> = (props) => {
	return (
		<article className='space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:items-baseline xl:pr-24 '>
			<div className='space-y-3 xl:col-span-3'>
				<div>
					<h3 className='text-2xl font-bold leading-8 tracking-tight'>
						<p className='text-gray-900 dark:text-gray-100'>
							{props.course}: {props.school}
						</p>
					</h3>
					<div className='flex flex-wrap'>
						<p className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
							{props.from} - {props.to}
						</p>
					</div>
				</div>
				<div>
					<p className='text-gray-500 max-w-none dark:text-gray-400'>
						{props.description}
					</p>
				</div>
			</div>
		</article>
	);
};
