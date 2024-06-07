import { useState } from 'react';
import { CardTwitter } from './CardTwitter';
const data = [
	{
		name: 'elias',
		userName: 'elias12',
		isFollowing: true,
	},
	{
		name: 'saul',
		userName: 'sual12',
		isFollowing: true,
	},
	{
		name: 'risa',
		userName: 'risa12',
		isFollowing: false,
	},
];
export const App = () => {
	const [msj, setMsj] = useState(false);

	console.log('este se redenriza de nuevo', msj);

	return (
		<section className='app'>
			<h2>{msj}</h2>
			{data.map(({ userName, name, isFollowing }) => (
				<CardTwitter key={userName} userName={userName} name={name} isFollowing={isFollowing} />
			))}
			<hr />
			<CardTwitter key='hola' userName='elias12' name='elias' isFollowing={msj} />
			<button onClick={() => setMsj(true)}>cambiar msj</button>
		</section>
	);
};
