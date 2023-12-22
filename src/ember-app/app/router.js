import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie-03-док-план-за-на-д-l');
  this.route('i-i-s-prilozhenie-03-док-план-за-на-д-e',
  { path: 'i-i-s-prilozhenie-03-док-план-за-на-д-e/:id' });
  this.route('i-i-s-prilozhenie-03-док-план-за-на-д-e.new',
  { path: 'i-i-s-prilozhenie-03-док-план-за-на-д-e/new' });
  this.route('i-i-s-prilozhenie-03-организация-l');
  this.route('i-i-s-prilozhenie-03-организация-e',
  { path: 'i-i-s-prilozhenie-03-организация-e/:id' });
  this.route('i-i-s-prilozhenie-03-организация-e.new',
  { path: 'i-i-s-prilozhenie-03-организация-e/new' });
  this.route('i-i-s-prilozhenie-03-спр-виды-раб-l');
  this.route('i-i-s-prilozhenie-03-спр-виды-раб-e',
  { path: 'i-i-s-prilozhenie-03-спр-виды-раб-e/:id' });
  this.route('i-i-s-prilozhenie-03-спр-виды-раб-e.new',
  { path: 'i-i-s-prilozhenie-03-спр-виды-раб-e/new' });
  this.route('i-i-s-prilozhenie-03-спр-ед-измер-l');
  this.route('i-i-s-prilozhenie-03-спр-ед-измер-e',
  { path: 'i-i-s-prilozhenie-03-спр-ед-измер-e/:id' });
  this.route('i-i-s-prilozhenie-03-спр-ед-измер-e.new',
  { path: 'i-i-s-prilozhenie-03-спр-ед-измер-e/new' });
  this.route('i-i-s-prilozhenie-03-спр-контр-аг-l');
  this.route('i-i-s-prilozhenie-03-спр-контр-аг-e',
  { path: 'i-i-s-prilozhenie-03-спр-контр-аг-e/:id' });
  this.route('i-i-s-prilozhenie-03-спр-контр-аг-e.new',
  { path: 'i-i-s-prilozhenie-03-спр-контр-аг-e/new' });
  this.route('i-i-s-prilozhenie-03-спр-номен-l');
  this.route('i-i-s-prilozhenie-03-спр-номен-e',
  { path: 'i-i-s-prilozhenie-03-спр-номен-e/:id' });
  this.route('i-i-s-prilozhenie-03-спр-номен-e.new',
  { path: 'i-i-s-prilozhenie-03-спр-номен-e/new' });
  this.route('i-i-s-prilozhenie-03-спр-объект-стр-l');
  this.route('i-i-s-prilozhenie-03-спр-объект-стр-e',
  { path: 'i-i-s-prilozhenie-03-спр-объект-стр-e/:id' });
  this.route('i-i-s-prilozhenie-03-спр-объект-стр-e.new',
  { path: 'i-i-s-prilozhenie-03-спр-объект-стр-e/new' });
  this.route('i-i-s-prilozhenie-03-спр-пользов-l');
  this.route('i-i-s-prilozhenie-03-спр-пользов-e',
  { path: 'i-i-s-prilozhenie-03-спр-пользов-e/:id' });
  this.route('i-i-s-prilozhenie-03-спр-пользов-e.new',
  { path: 'i-i-s-prilozhenie-03-спр-пользов-e/new' });
  this.route('i-i-s-prilozhenie-03-спр-тип-транс-ср-l');
  this.route('i-i-s-prilozhenie-03-спр-тип-транс-ср-e',
  { path: 'i-i-s-prilozhenie-03-спр-тип-транс-ср-e/:id' });
  this.route('i-i-s-prilozhenie-03-спр-тип-транс-ср-e.new',
  { path: 'i-i-s-prilozhenie-03-спр-тип-транс-ср-e/new' });
  this.route('i-i-s-prilozhenie-03-спр-трансп-ср-l');
  this.route('i-i-s-prilozhenie-03-спр-трансп-ср-e',
  { path: 'i-i-s-prilozhenie-03-спр-трансп-ср-e/:id' });
  this.route('i-i-s-prilozhenie-03-спр-трансп-ср-e.new',
  { path: 'i-i-s-prilozhenie-03-спр-трансп-ср-e/new' });
  this.route('i-i-s-prilozhenie-03-статьи-затрат-l');
  this.route('i-i-s-prilozhenie-03-статьи-затрат-e',
  { path: 'i-i-s-prilozhenie-03-статьи-затрат-e/:id' });
  this.route('i-i-s-prilozhenie-03-статьи-затрат-e.new',
  { path: 'i-i-s-prilozhenie-03-статьи-затрат-e/new' });
  this.route('i-i-s-prilozhenie-03-факт-выпол-раб-l');
  this.route('i-i-s-prilozhenie-03-факт-выпол-раб-e',
  { path: 'i-i-s-prilozhenie-03-факт-выпол-раб-e/:id' });
  this.route('i-i-s-prilozhenie-03-факт-выпол-раб-e.new',
  { path: 'i-i-s-prilozhenie-03-факт-выпол-раб-e/new' });
});

export default Router;
