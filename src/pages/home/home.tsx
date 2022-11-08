import {
	WorkExperience,
	Hero,
	Education,
	FeaturedProjects,
} from '../../components';

export const Home = () => {
	return (
		<>
			<Hero />
			<div className='pb-16'>
				<div className='mb-20'>
					<WorkExperience />
					<Education />
				</div>
				<FeaturedProjects />
			</div>
		</>
	);
};
