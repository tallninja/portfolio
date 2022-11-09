import React, { useState } from 'react';

const FORM_ENDPOINT =
	'https://public.herotofu.com/v1/a42582c0-6008-11ed-b82c-5d75eaa7ccff';

export const Contact = () => {
	const [email, setEmail] = useState<string>();
	const [subject, setSubject] = useState<string>();
	const [content, setContent] = useState<string>();
	const [submitted, setSubmitted] = useState<boolean>(false);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		setInterval(() => {
			setSubmitted(true);
		}, 200);
	};

	return (
		<div className='mb-12'>
			<div className='mt-8'>
				<h2 className='my-4 font-extrabold leading-6 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-8 md:text-4xl md:leading-10'>
					Contact Me
				</h2>
				<hr />
				<div className='mt-4'>
					{!submitted ? (
						<form
							className='flex flex-col'
							method='POST'
							action={FORM_ENDPOINT}
							target='_blank'
							onSubmit={onSubmit}
						>
							<div>
								<label htmlFor='email-input'>Your Name</label>
								<input
									type='text'
									name='name'
									id='name-input'
									className='mt-2 px-5 py-3 border-2 border-gray-600 dark:border-gray-400 rounded-md w-full dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-yellow-400'
									placeholder='John Doe'
									required
								/>
							</div>
							<div className='mt-4'>
								<label htmlFor='email-input'>Your Email</label>
								<input
									type='email'
									name='email'
									id='email-input'
									className='mt-2 px-5 py-3 border-2 border-gray-600 dark:border-gray-400 rounded-md w-full dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-yellow-400'
									placeholder='email@example.com'
								/>
							</div>
							<div className='mt-4'>
								<label htmlFor='message-textarea'>Message</label>
								<textarea
									name='Message'
									id='message-textarea'
									className='mt-2 px-5 py-3 border-2 border-gray-600 dark:border-gray-400 rounded-md w-full dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-yellow-400'
									placeholder='Reaching out for new opportunities'
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
					) : (
						<h1 className='font-extrabold leading-9 tracking-tight text-4xl my-5'>
							Thank You For Reaching Out 😊
						</h1>
					)}
				</div>
			</div>
		</div>
	);
};
