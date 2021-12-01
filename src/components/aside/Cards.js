const fakeData = [
	{
		id: '1',
		img: 'https://i.ytimg.com/vi/c6b6B9oN4Vg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTVY91RmiXzlROu9wlLyUjqregcg',
		title:
			'Contributing to Open Source on GitHub for beginners',
		youtuber: 'Kent C. Dodds',
		viewers: '79K views',
		createdAt: 'Streamed 2 years ago',
	},
	{
		id: '2',
		img: 'https://i.ytimg.com/vi/k6KcaMffxac/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBtFPtkq6-L4bf58jQSzEd5FCCkeA',
		title:
			'Contributing to Open Source on GitHub for beginners',
		youtuber: 'Kent C. Dodds',
		viewers: '79K views',
		createdAt: 'Streamed 2 years ago',
	},
	{
		id: '3',
		img: 'https://i.ytimg.com/vi/c6b6B9oN4Vg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTVY91RmiXzlROu9wlLyUjqregcg',
		title:
			'Contributing to Open Source on GitHub for beginners',
		youtuber: 'Kent C. Dodds',
		viewers: '79K views',
		createdAt: 'Streamed 2 years ago',
	},
	{
		id: '4',
		img: 'https://i.ytimg.com/vi/k6KcaMffxac/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBtFPtkq6-L4bf58jQSzEd5FCCkeA',
		title:
			'Contributing to Open Source on GitHub for beginners',
		youtuber: 'Kent C. Dodds',
		viewers: '79K views',
		createdAt: 'Streamed 2 years ago',
	},
	{
		id: '5',
		img: 'https://i.ytimg.com/vi/c6b6B9oN4Vg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTVY91RmiXzlROu9wlLyUjqregcg',
		title:
			'Contributing to Open Source on GitHub for beginners',
		youtuber: 'Kent C. Dodds',
		viewers: '79K views',
		createdAt: 'Streamed 2 years ago',
	},
	{
		id: '6',
		img: 'https://i.ytimg.com/vi/k6KcaMffxac/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBtFPtkq6-L4bf58jQSzEd5FCCkeA',
		title:
			'Contributing to Open Source on GitHub for beginners',
		youtuber: 'Kent C. Dodds',
		viewers: '79K views',
		createdAt: 'Streamed 2 years ago',
	},
	{
		id: '7',
		img: 'https://i.ytimg.com/vi/c6b6B9oN4Vg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTVY91RmiXzlROu9wlLyUjqregcg',
		title:
			'Contributing to Open Source on GitHub for beginners',
		youtuber: 'Kent C. Dodds',
		viewers: '79K views',
		createdAt: 'Streamed 2 years ago',
	},
	{
		id: '8',
		img: 'https://i.ytimg.com/vi/k6KcaMffxac/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBtFPtkq6-L4bf58jQSzEd5FCCkeA',
		title:
			'Contributing to Open Source on GitHub for beginners',
		youtuber: 'Kent C. Dodds',
		viewers: '79K views',
		createdAt: 'Streamed 2 years ago',
	},
	{
		id: '9',
		img: 'https://i.ytimg.com/vi/c6b6B9oN4Vg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTVY91RmiXzlROu9wlLyUjqregcg',
		title:
			'Contributing to Open Source on GitHub for beginners',
		youtuber: 'Kent C. Dodds',
		viewers: '79K views',
		createdAt: 'Streamed 2 years ago',
	},
	{
		id: '10',
		img: 'https://i.ytimg.com/vi/k6KcaMffxac/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBtFPtkq6-L4bf58jQSzEd5FCCkeA',
		title:
			'Contributing to Open Source on GitHub for beginners',
		youtuber: 'Kent C. Dodds',
		viewers: '79K views',
		createdAt: 'Streamed 2 years ago',
	},
];

const Cards = () => {
	return (
		<>
			{fakeData.map((data) => (
				<div
					className='aside__youtubeImgContainer'
					key={data.id}
				>
					<div className='aside__youtubeImg'>
						<img src={data.img} alt={data.title} />
					</div>
					<div className='aside__youtubeTextContainer'>
						<h3>{data.title}</h3>
						<h4>{data.youtuber}</h4>
						<h4>
							<span>{data.viewers}</span>・
							<span>{data.createdAt}</span>
						</h4>
					</div>
				</div>
			))}
		</>
	);
};

export default Cards;
