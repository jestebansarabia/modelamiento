var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const usersRouter = require('./routes/users');
const travelsRouter = require('./routes/travel');
const routesRouter = require('./routes/route');
const drivesRouter = require('./routes/drive');
const vehiclesRouter = require('./routes/vehicle');
const clientsRouter = require('./routes/client');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());
app.use('/users', usersRouter);
app.use('/travels',travelsRouter);
app.use('/routes',routesRouter);
app.use('/drives',drivesRouter);
app.use('/vehicles',vehiclesRouter);
app.use('/clients',clientsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

/*
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/


app.listen(3030, console.log("servidor corriendo en el puerto 3030"));



module.exports = app;
