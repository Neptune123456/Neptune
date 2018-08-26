var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var settings = require('./settings');
var session = require('express-session');
var flash = require('connect-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var abcdRouter = require('./routes/abcd');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var pageRouter = require('./routes/page');
var classifyRouter = require('./routes/classify');
var detailRouter = require('./routes/detail');
var listRouter = require('./routes/list');
var shoppingRouter = require('./routes/shopping');

// Get home page
// router.get('/user/:username',function (req,res,next) {
//     res.json({"name":req.params.username});
// });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//模板村放的位置
app.set('view engine', 'pug');//pug模板

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//托管public所有静态文件

app.use(session({//配置session
    secret: settings.cookieSecret, //加密
    key: settings.db, //cookie nam
    cookie: {maxAge: 60000},
    resave: false,
    saveUninitialized: true
}));
app.use(flash());//引用flesh
app.use(function (req, res, next) {//flesh对接
    res.locals.errors = req.flash('error');//错误信息赋给rrors
    res.locals.infos = req.flash('info');
    next();
});

app.use('/', indexRouter);//‘/’表示路径
app.use('/users', usersRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/page',pageRouter);
app.use('/classify',classifyRouter);
app.use('/detail',detailRouter);
app.use('/list',listRouter);
app.use('/shopping',shoppingRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
