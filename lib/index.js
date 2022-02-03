import got from 'got';

export const handler = async (event, _context) => {
	const url = `https://animechan.vercel.app/api/quotes/character?name=${event.name}`;

	const body = await got(url).json();
	const index = Math.floor(Math.random() * body.length);

	const phrase = { animePhrase: body[index].quote };
	console.log(phrase);

	return phrase;
};
