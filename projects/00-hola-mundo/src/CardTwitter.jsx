import { useState } from 'react';

export const CardTwitter = ({ userName, name, isFollowing }) => {
	const [following, setFollowing] = useState(isFollowing);

	console.log('valor inicial isFollowing', following);
	console.log('props isFollowing', isFollowing);

	return (
		<article className='card-twitter'>
			<header className='info'>
				<img src={`https://unavatar.io/${userName}`} alt='avatar' className='imagen-tw' />
				<div className='username'>
					<strong>{name}</strong>
					<span>@{userName}</span>
				</div>
			</header>
			<aside className='aside'>
				<button onClick={() => setFollowing(!following)} className='btn-follow'>
					{following ? 'Siguiendo' : 'Seguir'}{' '}
				</button>
			</aside>
		</article>
	);
};
