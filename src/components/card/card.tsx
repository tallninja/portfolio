import './card.scss';

interface CardProps {
	image: string;
	title: string;
	body: string;
	code?: string;
	live?: string;
}

export const Card: React.FC<CardProps> = (props) => {
	return (
		<div className='p-4 md:w-1/2 md larger-on-hover card'>
			<div className='h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700'>
				<span id='l1'>
					<img
						alt={props.title}
						src={props.image}
						decoding='async'
						className='object-cover object-center lg:h-48 md:h-36'
					/>
				</span>
				<div className='p-6'>
					<h3 className='mb-3 font-bold'>{props.title}</h3>
					<div className='text-sm'>
						<p className='text-justify'>{props.body}</p>
					</div>
					<div className='pt-4 flex flex-row justify-between'>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href={props.code}
							className='text-base font-medium leading-6 text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400'
							aria-label="Link to project's github repository"
						>
							Code →
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
