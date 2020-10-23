const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.info h1');
const description = document.querySelector('.info h3');
const sneaker = document.querySelector('.sneakers img');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase button');

container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

container.addEventListener('mouseenter', e => {
  card.style.transition = 'none';
  title.style.transform = 'translateZ(100px)';
  description.style.transform = 'translateZ(100px)';
  sneaker.style.transform = 'translateZ(120px) rotateZ(-45deg)';
  sizes.style.transform = 'translateZ(100px)';
  purchase.style.transform = 'translateZ(100px)';
});

container.addEventListener('mouseleave', e => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
  title.style.transform = 'translateZ(0px)';
  description.style.transform = 'translateZ(0px)';
  sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
  sizes.style.transform = 'translateZ(0px)';
  purchase.style.transform = 'translateZ(0px)';
});

