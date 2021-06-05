const url = await arg("URL?");

const uri = url
  .replace('https://open.spotify.com/', '')
  .replace('/', ':')
  .replace(/\?.*/, '');

copy(`spotify:${uri}`);
