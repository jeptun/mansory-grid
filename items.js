const posts = [];
const images = [
  "https://dr.savee-cdn.com/things/6/2/cacc17d6f77580900d7a71.webp",
  "https://dr.savee-cdn.com/things/6/2/c704ecc680846d6b6ab01d.webp",
  "https://dr.savee-cdn.com/things/6/2/c728717419009324f93210.webp",
  "https://dr.savee-cdn.com/things/6/3/0242151e139c49ec51cc58.webp",
  "https://dr.savee-cdn.com/things/6/3/0241ca1e139c49ec51caca.webp",
  "https://dr.savee-cdn.com/things/6/0/1b5d2fe8dda5120e0f7422.webp",
  "https://dr.savee-cdn.com/things/6/1/886aab12c44fba1098d4c3.webp",
  "https://dr.savee-cdn.com/things/6/2/c5c3efe00cfbdd5b78da1d.webp",
  "https://dr.savee-cdn.com/things/6/2/f1750b5a1bca94033d6555.webp",
  "https://dr.savee-cdn.com/things/6/3/0241a3d9b4a2c81431c1a1.webp",
  "https://dr.savee-cdn.com/things/6/3/0242171e139c49ec51cc7b.webp",
  "https://dr.savee-cdn.com/things/6/0/1d455f7aa54b311f32313f.webp",
  "https://dr.savee-cdn.com/things/6/3/02419a1e139c49ec51c98b.webp",
  "https://dr.savee-cdn.com/things/6/3/0242071e139c49ec51cbab.webp",
  "https://dr.savee-cdn.com/things/6/1/908fce32076cba3f004b02.webp",
  "https://dr.savee-cdn.com/things/6/3/0241a71e139c49ec51ca45.webp",
  "https://dr.savee-cdn.com/things/6/2/e20c3f6bc472abe0998d72.webp",
  "https://dr.savee-cdn.com/things/5/f/a556e2777dd819a086d82f.webp",
  "https://dr.savee-cdn.com/things/6/2/4338ff010aa3ee612249a4.webp",
  "https://dr.savee-cdn.com/things/5/f/e3935ad78d75773a95b34c.webp",
  "https://dr.savee-cdn.com/things/5/c/9505e33176632fb8fc29c6.webp",
  "https://dr.savee-cdn.com/things/6/2/fbdbb47d2ce5a5e2416d95.webp",
  "https://dr.savee-cdn.com/things/6/2/ba01795faba0ec36f816c9.webp",
  "https://dr.savee-cdn.com/things/6/2/bde1855db1666a794d9d14.webp",
];

let imageIndex = 0;

for (let i = 1; i <= images.length; i++) {
  let item = {
    id: i,
    title: `Post ${i}`,
    image: images[imageIndex],
  };

  posts.push(item);
  imageIndex++;
  if (imageIndex > images.length - 1) imageIndex = 0;
}

