import { WorkExperience, Hero, Education } from '../../components';

export const Home = () => {
	return (
		<main className='mb-auto'>
			<Hero />
			<div className='pb-16'>
				<WorkExperience />
				<Education />
			</div>
		</main>
	);
};
