import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import ContainerBlock from '../components/ContainerBlock';

export default function Home() {
	return (
		<ContainerBlock
			title='Andreas Frick Toresand - Developer'
			description='This is my Portfolio built with next.js and tailwind.'>
			<Hero />
		</ContainerBlock>
	);
}
