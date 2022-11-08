import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMeteor } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
	const [nav, setNav] = useState<boolean>(false);

	const ham =
		'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1\
	     1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z';

	const cross =
		'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414\
	     10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z';

	return (
		<header className='flex items-center justify-between py-10'>
			<div className='flex items-center justify-between'>
				<FontAwesomeIcon
					icon={faMeteor}
					className='text-black dark:text-white mr-3 text-5xl hover:text-yellow-400'
				/>
				<div className='hidden h-6 text-xl font-semibold sm:block'>
					Ernest Wambua
				</div>
			</div>
			<div className='flex flex-row items-center text-base leading-5'>
				<div className='hidden sm:block'>
					<a className='p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100'>
						Home
					</a>
					<a className='p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100'>
						Blogs
					</a>
					<a className='p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100'>
						Projects
					</a>
					<a className='p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100'>
						Contact
					</a>
				</div>
				<div className='sm:hidden'>
					<button
						type='button'
						className='w-8 h-8 py-1 ml-1 mr-1 rounded'
						aria-label='Toggle Menu Button'
						onClick={() => setNav(!nav)}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='white'
							className='text-gray-900 dark:text-gray-100'
						>
							<path
								fillRule='evenodd'
								d={!nav ? ham : cross}
								clipRule='evenodd'
							></path>
						</svg>
					</button>
					<div
						className={`fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 ${
							nav ? 'translate-x-0' : 'translate-x-full'
						}`}
					>
						<button
							type='button'
							className='fixed w-full h-full cursor-auto focus:outline-none'
							onClick={() => setNav(!nav)}
						></button>
						<nav className='fixed h-full w-full mt-8 flex flex-col align-center'>
							<div className='px-12 py-4 flex justify-center'>
								<a className='text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100'>
									Home
								</a>
							</div>
							<div className='px-12 py-4 flex justify-center'>
								<a className='text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100'>
									Blogs
								</a>
							</div>
							<div className='px-12 py-4 flex justify-center'>
								<a className='text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100'>
									Projects
								</a>
							</div>
							<div className='px-12 py-4 flex justify-center'>
								<a className='text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100'>
									Contact
								</a>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};
