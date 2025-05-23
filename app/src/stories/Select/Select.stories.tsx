import * as React from 'react';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

const SelectDemo: React.FC = () => {
	return (
		<Select>
			<SelectTrigger className='w-[180px]'>
				<SelectValue placeholder='Select a fruit' />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Fruits</SelectLabel>
					<SelectItem value='apple'>Apple</SelectItem>
					<SelectItem value='banana'>Banana</SelectItem>
					<SelectItem value='blueberry'>Blueberry</SelectItem>
					<SelectItem value='grapes'>Grapes</SelectItem>
					<SelectItem value='pineapple'>Pineapple</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SelectDemo> = {
	title: 'Select',
	component: SelectDemo,
};

export default meta;

type Story = StoryObj<typeof SelectDemo>;

export const Default: Story = {
	render: () => <SelectDemo />,
};
