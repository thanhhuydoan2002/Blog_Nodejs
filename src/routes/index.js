const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter); // '/' needs to be in the last row
}

module.exports = route;
