const alfy = require("alfy");
const cheerio = require("cheerio");

(async () => {
  const response = await alfy.fetch("https://ramdajs.com/docs/", {
    json: false
  });
  const $ = cheerio.load(response.match(/<body[^>]*>((.|[\n\r])*)<\/body>/)[0]);

  alfy.log($.html());

  let items = [];

  $("ul.toc .func a").each((index, element) => {
    items.push(
      $(element)
        .text()
        .trim()
        .split("\n")[0]
    );
  });

  alfy.log(items);

  alfy.output(items);
})();
