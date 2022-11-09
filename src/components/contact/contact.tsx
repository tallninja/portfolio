import React, { useState } from 'react';

export const Contact = () => {
	const [email, setEmail] = useState<string>();
	const [subject, setSubject] = useState<string>();
	const [content, setContent] = useState<string>();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({ email, subject, content });
		alert('Thank you for reaching out...😊');
	};

	return (
		<div className='mb-12'>
			<div className='mt-8'>
				<h2 className='my-4 font-extrabold leading-6 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-8 md:text-4xl md:leading-10'>
					Contact Me
				</h2>
				<hr />
				<div className='mt-4'>
					<form className='flex flex-col' onSubmit={onSubmit}>
						<div>
							<label htmlFor='email-input'>Email</label>
							<input
								type='email'
								name='email'
								id='email-input'
								className='mt-2 px-5 py-3 border-2 border-gray-600 dark:border-gray-400 rounded-md w-full dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-yellow-400'
								placeholder='email@example.com'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className='mt-4'>
							<label htmlFor='subject-input'>Subject</label>
							<input
								type='text'
								name='subject'
								id='subject-input'
								className='mt-2 px-5 py-3 border-2 border-gray-600 dark:border-gray-400 rounded-md w-full dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-yellow-400'
								placeholder='Subject'
								onChange={(e) => setSubject(e.target.value)}
							/>
						</div>
						<div className='mt-4'>
							<label htmlFor='content-textarea'>Content</label>
							<textarea
								name='content'
								id='content-text-area'
								className='mt-2 px-5 py-3 border-2 border-gray-600 dark:border-gray-400 rounded-md w-full dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-yellow-400'
								placeholder='Reaching out for new opportunities'
								onChange={(e) => setContent(e.target.value)}
							/>
						</div>
						<div className='mt-4'>
							<button
								type='submit'
								className='w-full px-5 py-3 bg-yellow-300 hover:bg-yellow-400 rounded-md font-extrabold'
							>
								<i className='fa-solid fa-paper-plane text-3xl'></i>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
