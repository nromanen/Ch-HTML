var fortune = require('./lib/fortune.js');
var express = require ('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var formidable = require('formidable' );
// Database
var monk = require('monk');
var db = monk('localhost:27017/public');

var app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/public";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

var handlebars = require('express-handlebars').create({
  defaultLayout:'main',
  helpers: {
    section: function(name, options){
      if(!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    }
  }
});

app.use(require('body-parser').urlencoded({ extended: true }));


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/contest/add_img', function(req, res){
  var now = new Date();
  res.render('contest/add_img',{
     year: now.getFullYear(),
     month: now. getMonth()
   });
 });
app.post('/contest/add_img/:year/:month' , function(req, res){
  var form = new formidable. IncomingForm();
  form.parse(req, function(err, fields, files){
    if(err) return res.redirect(303, '/error' );
    console.log('received fields:' );
    console.log(fields);
    console.log('received files:' );
console.log(files);
res.redirect(303, '/gallery' );
});
});

app.get('/contact', function(req, res){
  res.render('contact', {csrf: 'CSRF token goes here'});
});

app.post('/process', function(req, res){
  if(req.xhr || req.accepts('json,html' )==='json' ){
    // если здесь есть ошибка, то мы должны отправить { error: 'описание ошибки' }
    res.send({ success: true });
   } else {
     // если бы была ошибка, нам нужно было бы перенаправлять на страницу ошибки
     res.redirect(303, '/thank-you' );
    } });

  app.use(function(req, res, next){
    if(!res.locals.partials) res.locals.partials = {};
    res.locals.partials.newsContext = getnewsData();
    next();
      });

  function getnewsData(){
                  return {
                    locations: [
                        {
                        title_news: 'Новые автомобили в GRID 2',
                        imgUrl: '../img/04633260.jpg',
                        caption: 'Для всех любителей гоночной игры GRID 2, разработчики, а именно компания Codemasters, выпустили дополнительный набор автомобилей ',
                      },
                      {
                        title_news: 'Видео к Far Cry 5: Воссоздание Монтаны',
                        imgUrl: '../img/94108530.jpg',
                        caption: 'Компанией Ubisoft представлен новый видеоролик о создании Far Cry 5. Он посвящен месту действию игры, а именно штату Монтана ',
                        },
                        {
                          title_news: 'Новые скриншоты пустынной карты PlayerUnknown’s Battlegrounds',
                          imgUrl: '../img/34480228.jpg',
                          caption: 'У игры PlayerUnknown’s Battlegrounds в производственаходится новая пустынная карта, и для подогрева интереса пользователей, разработчики ',
                        },
                        {
                        title_news: 'Electronic Arts купила студию Respawn Entertainment',
                        imgUrl: '../img/36825655.png',
                        caption: 'Студия Respawn Entertainment, которая разработала серию Titanfall,была выкуплена издательством Electronic Arts. У студии в разработке имеется ',
                      },
                      {
                      title_news: 'Конан О\'Брайен и американский рэпер Уиз Халифа вместе сыграли в Gears of War 4',
                      imgUrl: '../img/07972128.jpg',
                      caption: 'Не одобряемому геймеру Конану О\'Брайену удалось провести игровую сессию и познакомиться с игрой Gears of War 4. Компанию ему составил ',
                    },
                    {
                    title_news: 'Новый проект с элементами выживания от Blizzard и Carbine',
                    imgUrl: '../img/53694200.jpg',
                    caption: 'Буквально вчера стало известно, что разработчики из студии Frostkeep Studios, выпустившие проекты World of Warcraft и WildStar ',
                  },
                  {
                  title_news: 'Разработчики Overwatch работают над новыми персонажами',
                  imgUrl: '../img/64033148.jpg',
                  caption: 'Разработчики Overwatch ведут работу над созданием двух новых персонажей. Директор проекта отметил, что в скором времени будет изменён ',
                },
                {
                title_news: 'Иран запретил ловить покемонов на территории своей страны',
                imgUrl: '../img/31480979.jpg',
                caption: 'Международный телеканал «BBC News», вещающий новостные ленты на английском языке в Великобритании, сообщил, что Иранские власти полностью  ',
              },
  ],};}


app.use(function(req, res, next){
  if(!res.locals.partials) res.locals.partials = {};
  res.locals.partials.popular_news_firstContext = getpopular_news_firstData();
  next();
    });

function getpopular_news_firstData(){
                return {
                  locations: [
                      {
                      title_news: 'Новые автомобили в GRID 2',
                      imgUrl: '../img/04633260.jpg',
                      caption: 'Для всех любителей гоночной игры GRID 2, разработчики, а именно компания Codemasters, выпустили дополнительный набор автомобилей ',
                    }, ], };}

app.use(function(req, res, next){
  if(!res.locals.partials) res.locals.partials = {};
  res.locals.partials.popular_newsContext = getpopular_newsData();
  next();
    });

function getpopular_newsData(){
                return {
                  locations: [
                      {
                      title_news: 'Новые автомобили в GRID 2',
                      imgUrl: '../img/04633260.jpg',
                      },
                      {
                        title_news: 'Новые скриншоты пустынной карты PlayerUnknown’s Battlegrounds',
                        imgUrl: '../img/34480228.jpg',
                      },
                      {
                      title_news: 'Electronic Arts купила студию Respawn Entertainment',
                      imgUrl: '../img/36825655.png',
                      },
                  {
                  title_news: 'Новый проект с элементами выживания от Blizzard и Carbine',
                  imgUrl: '../img/53694200.jpg',
                  },
                {
                title_news: 'Разработчики Overwatch работают над новыми персонажами',
                imgUrl: '../img/64033148.jpg',
                },
              {
              title_news: 'Иран запретил ловить покемонов на территории своей страны',
              imgUrl: '../img/31480979.jpg',
              },
],};}

app.use(function(req, res, next){
  if(!res.locals.partials) res.locals.partials = {};
  res.locals.partials.article_sliderContext = getarticle_sliderData();
  next();
    });

function getarticle_sliderData(){
                return {
                  locations: [
                      {
                      title_article: 'Новые автомобили в GRID 2',
                      imgUrl: '../img/04633260.jpg',
                      caption: 'Для всех любителей гоночной игры GRID 2, разработчики, а именно компания Codemasters, выпустили дополнительный набор автомобилей ',
                    },
                    {
                      title_article: 'Видео к Far Cry 5: Воссоздание Монтаны',
                      imgUrl: '../img/94108530.jpg',
                      caption: 'Компанией Ubisoft представлен новый видеоролик о создании Far Cry 5. Он посвящен месту действию игры, а именно штату Монтана ',
                      },
                      {
                        title_article: 'Новые скриншоты пустынной карты PlayerUnknown’s Battlegrounds',
                        imgUrl: '../img/34480228.jpg',
                        caption: 'У игры PlayerUnknown’s Battlegrounds в производственаходится новая пустынная карта, и для подогрева интереса пользователей, разработчики ',
                      },
],};}

app.use(function(req, res, next){
  if(!res.locals.partials) res.locals.partials = {};
  res.locals.partials.article_slider_thumbContext = getarticle_slider_thumbData();
  next();
    });

function getarticle_slider_thumbData(){
                return {
                  locations: [
                      {
                      title_article: 'Новые автомобили в GRID 2',
                      imgUrl: '../img/04633260.jpg',
                      caption: 'Для всех любителей гоночной игры GRID 2, разработчики, а именно компания Codemasters, выпустили дополнительный набор автомобилей ',
                    },
                    {
                      title_article: 'Видео к Far Cry 5: Воссоздание Монтаны',
                      imgUrl: '../img/94108530.jpg',
                      caption: 'Компанией Ubisoft представлен новый видеоролик о создании Far Cry 5. Он посвящен месту действию игры, а именно штату Монтана ',
                      },
                      {
                        title_article: 'Новые скриншоты пустынной карты PlayerUnknown’s Battlegrounds',
                        imgUrl: '../img/34480228.jpg',
                        caption: 'У игры PlayerUnknown’s Battlegrounds в производственаходится новая пустынная карта, и для подогрева интереса пользователей, разработчики ',
                      },
],};}

app.use(function(req, res, next){
  if(!res.locals.partials) res.locals.partials = {};
  res.locals.partials.gamesContext = getgamesData();
  next();
    });

function getgamesData(){
                return {
                  locations: [
                      {
                      title_game: 'FEAR: Perseus Mandate',
                      imgUrl: '../img/2540.jpg',
                    },
                    {
                      title_game: 'Gravel',
                      imgUrl: '../img/2537.jpg',
                      },
                      {
                        title_game: 'Gtand Theft Auto 4: Episode from Liberty City',
                        imgUrl: '../img/503.jpg',
                      },
                      {
                        title_game: 'Sleeping Dogs',
                        imgUrl: '../img/110.jpg',
                      },
],};}


app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/tours/hood-river', function(req, res){
      res.render('tours/hood-river'); });

app.get('/tours/request-group-rate', function(req, res){
      res.render('tours/request-group-rate'); });

app.get('/', function(req, res){
res.render('index');
});

app.get('/registration', function(req, res){
res.render('registration');
});

app.get('/tests', function(req, res){
res.render('tests');
});

app.get('/news', function(req, res){
res.render('news');
});

app.get('/games', function(req, res){
res.render('games');
});

app.get('/gallery', function(req, res){
res.render('gallery');
});

app.get('/articles', function(req, res){
res.render('articles');
});

app.get('/about', function(req, res) {
      res.render('about', {
        fortune: fortune.getFortune()
      });
     });

app.get('/foo',
function(req, res){
  res.render('foo', { layout:  'microsite' });
});

app.use(function(req, res, next){
res.status(404);
res.render('404');
}) ;

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
res.render('500');
});
app.listen(app.get('port'), function(){
  console.log('Express запущен на http://localhost:' +
app.get('port') + '; нажмите Ctrl + C для завершения.' );
});
