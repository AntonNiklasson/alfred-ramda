const alfy = require('alfy');
const cheerio = require('cheerio')


async (() => {
	const response = await alfy.fetch('https://ramdajs.com/docs/')

	$ = cheerio.load(response.body)
	alfy.log($.html())
})()
