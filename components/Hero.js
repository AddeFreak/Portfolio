import React from 'react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { RainbowHighlight } from './RainbowHighlight';
import userData from '../constants/data';

export default function Hero() {
	const colors = ['#F59E0B', '#84CC16', '#10B981', '#3B82F6'];
	return (
		<div className='flex flex-row justify-center items-start overflow-hidden'>
			{/* Text container */}

			<div className='w-full md:w-1/2 text-center md:text-left lg:p-20'>
				<RoughNotationGroup show={true}>
					<RainbowHighlight color={colors[0]}>
						<h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
							Developer.
						</h1>
					</RainbowHighlight>
					<RainbowHighlight color={colors[1]}>
						<h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
							Designer.
						</h1>
					</RainbowHighlight>
					<RainbowHighlight color={colors[2]}>
						<h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
							Programmer.
						</h1>
					</RainbowHighlight>
					<RainbowHighlight color={colors[3]}>
						<h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
							Youtuber.
						</h1>
					</RainbowHighlight>
				</RoughNotationGroup>
			</div>
			{/* Image container */}
			<div className='hidden lg:block relative rounded-full object-scale-down  -mr-40 mt-20 '>
				<div className='rounded-full w-3/4  '>
					<img
						src={userData.avatarUrl}
						alt='profilepic'
						className='object-cover rounded-full shadow'
					/>
				</div>
			</div>
		</div>
	);
}
