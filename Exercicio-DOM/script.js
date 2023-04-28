const imagem = [
  "https://media.comicbook.com/2021/06/x-men-1-cover-young-variant-1270933.jpeg?auto=webp&width=696&height=1061&crop=696:1061,smart",
  "https://media.comicbook.com/2021/06/x-men-1-cover-doaly-variant-1270932.jpeg?auto=webp&width=696&height=1056&crop=696:1056,smart",
  "https://ovicio.com.br/wp-content/uploads/2022/01/20220119-xmenred2022001-lopez-var-3.jpg",
  "https://media.comicbook.com/2021/06/x-men-1-cover-dauterman-front-1270934.jpeg?auto=webp&width=696&height=1070&crop=696:1070,smart",
  "https://ovicio.com.br/wp-content/uploads/2022/01/20220119-xmenredpromo-garron-colors-3.jpg",
  "https://rebootcomics.com.br/wp-content/uploads/2023/01/1673287379627.jpg",
  "https://1.bp.blogspot.com/-cenC55CGO7o/XZvp0RRaGoI/AAAAAAAAJ9U/clgiD-2CGjIYma9X-api7S3QHZ3uRG0qACLcBGAsYHQ/s1600/leinil-francis-yu_x-men001_cv001.jpg",
  "https://cdn.marvel.com/u/prod/marvel/i/mg/6/40/60e72a903a7a9/clean.jpg",
  "https://tajmahalcomics.com/wp-content/uploads/2022/05/2090973_xl.jpg",
  "https://tajmahalcomics.com/wp-content/uploads/2022/07/2098738_xl.jpg",
  "https://1.bp.blogspot.com/-SixLnITlS7c/YMabr_ori5I/AAAAAAACNEQ/eeYfEWPtvn4BKW0HgEQJ7Set5-DfOPGIACLcBGAsYHQ/s829/x-gala1.jpg",
  "https://static.wikia.nocookie.net/marvel/images/6/62/All-New_X-Men_Vol_1_3_Textless.jpg/revision/latest?cb=20180308014140&path-prefix=pt-br",
  "https://static.wikia.nocookie.net/marveldatabase/images/5/58/All-New_X-Men_Vol_1_17_Textless.jpg/revision/latest?cb=20130926015027",
  "https://jamesons.com.br/wp-content/uploads/2022/01/x-men-eleicao-2022-1-666x1024.jpg",
  "https://1.bp.blogspot.com/-tW8mbW-IEr0/YVIblF7WA6I/AAAAAAAAPDE/XBo6epP_Hesn8UcgM057GycBrMtA3OxEACLcBGAsYHQ/s900/larraz_X-Men%2B%25282021-%2529%2B003-017.jpg"
];

function randomImg() {
  const randomIndex = Math.floor(Math.random() * imagem.length);
  return imagem[randomIndex];
}

function loadImg() {
  const img = document.createElement("img");
  img.src = randomImg();
  document.getElementById("galeria").appendChild(img);
}
for (let i = 0; i < 5; i++) {
  loadImg();
}
window.addEventListener("scroll", function() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    loadImg();
  }
});



