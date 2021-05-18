const userRouter = require('../controllers/usercontroller');
const gameRouter = require('../controllers/gamecontroller');

const expressLoader = async ({ app }) => {
  app.use(require('body-parser').json());


  app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
      res.send('Service is running!');
      return;
    }
    next();
  });

  app.use('/api/auth', userRouter);

  app.use(require('../middleware/validate-session'))

  app.use('/api/game', gameRouter);

  return app;
};

module.exports = expressLoader;
