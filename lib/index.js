import got from 'got';

export const handler = async (_event, _context) => {
	const name = process.env.NAME;
	const url = `https://animechan.vercel.app/api/quotes/character?name=${name}`;
	const body = await got(url).json();

	console.log({ animePhrase: body[0].quote });
};
