import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Repositories from '../components/Repositores';
import getLatestRepos from '../lib/getLatestRepos';
import ContainerBlock from '../components/ContainerBlock';
import userData from '../constants/data';

export default function Home({ repositories }) {
	return (
		<ContainerBlock
			title='Andreas Frick Toresand - Developer'
			description='This is my Portfolio built with next.js and tailwind.'>
			<Hero />
			<Repositories repositories={repositories} />
		</ContainerBlock>
	);
}

export const getServerSideProps = async () => {
	console.log(process.env.GITHUB_AUTH_TOKEN);
	let token = process.env.GITHUB_AUTH_TOKEN;

	const repositories = await getLatestRepos(userData, token);
	// console.log("REPOSITORIES", repositories);

	return {
		props: {
			repositories,
		},
	};
};
