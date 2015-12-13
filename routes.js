var routes = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');

module.exports = function (app) {
app.get('/', login);
app.get('/users', users);
};