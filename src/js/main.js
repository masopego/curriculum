'use strict';

const sentence1 =
  ' <span>Camaleónica: adj.,</span> se dice de aquella persona que es capaz de adaptarse a su entorno.';

const sentence2 =
  ' <span>Crítica: adj.,</span> se dice de aquella persona que analiza pormenorizadamente algo y lo valora según sus propios criterios.';

const sentence3 =
  ' <span> Minuciosa: adj.,</span> se dice de aquella persona amante de los detalles, que vela por su cuidado.';

var options = {
  strings: [sentence1, sentence2, sentence3],
  typeSpeed: 50,
  shuffle: true,
  fadeOut: true,
  loop: true,
  backDelay: 2000,
};

var typed = new Typed('.quote', options);
