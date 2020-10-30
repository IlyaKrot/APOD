let title = document.querySelector('.apod-title__title');
let img = document.querySelector('.apod-img__img');
let explanation = document.querySelector('.apod-desc__explanation');
let date = document.querySelector('.apod-desc__date');
let copyright = document.querySelector('.apod-desc__copyright');
let data = {}

async function getData() {
  await fetch('https://api.nasa.gov/planetary/apod?api_key=CgcS8t8ZP8lhqcDx8beL0rHakJMhLMcyTqXfKD8E')
  .then(res => res.json())
  .then(json => {
    data = json
  });
  title.textContent = data.title.toUpperCase()
  img.src = data.hdurl
  img.alt = data.title
  explanation.textContent = data.explanation
  date.textContent = data.date
  copyright.textContent = data.copyright;
}

img.onclick = () => {
  img.classList.toggle('resize')
  if (img.classList.contains('resize')){
    document.body.style = 'overflow: hidden'
  } else {
    document.body.style = 'overflow: auto'
  }
}

getData()
