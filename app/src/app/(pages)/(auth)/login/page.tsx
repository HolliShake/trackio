'use client';
import Button from '@/components/custom/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormEvent, useCallback, useState } from 'react';

type UserCredential = {
	email: string;
	password: string;
};

export default function LoginPage() {
	const [credentialPlaceholder, setCredentialPlaceholder] = useState<UserCredential>({
		email: 'Email',
		password: 'Password',
	});

	const handleChange = (e: FormEvent<HTMLInputElement>) => {
		const { type, value } = e.currentTarget;
		setCredentialPlaceholder(prev => ({ ...prev, [type]: value }));
	};

	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.stopPropagation();
			e.preventDefault();
			console.log(credentialPlaceholder);
		},
		[credentialPlaceholder],
	);

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<Card className='rounded-md shadow-sm w-full max-w-sm'>
				<CardContent className='p-3'>
					<form onSubmit={handleSubmit}>
						<div className='grid grid-cols-12 gap-3'>
							<div className='col-span-12'>
								<div className='space-y-2'>
									<Label
										htmlFor='email'
										className='text-sm font-medium'
									>
										Email
									</Label>
									<Input
										placeholder='Email'
										type='email'
										className='w-full'
										aria-label='Email'
										aria-describedby='email'
										value={credentialPlaceholder.email}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className='col-span-12'>
								<div className='space-y-2'>
									<Label
										htmlFor='password'
										className='text-sm font-medium'
									>
										Password
									</Label>
									<Input
										placeholder='Password'
										type='password'
										className='w-full'
										aria-label='Password'
										aria-describedby='password'
										value={credentialPlaceholder.password}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className='col-span-12 mt-3'>
								<Button
									className='w-full'
									size='lg'
									type='submit'
								>
									Login
								</Button>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
