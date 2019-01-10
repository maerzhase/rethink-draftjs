import express, { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import testPage from './sample-data/draft-js-sample';
import Values from './api/controllers/Values';
import Pages from './api/controllers/Pages';
import Templates from './api/controllers/Templates';

const router = new Router();

router.use(cors());
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
router.use(bodyParser.json());

/*
 * BLOCKS
 */

router.route('/api/values').get(Values.getAll);
router.route('/api/values/:id').delete(Values.get);
router.route('/api/values').delete(Values.deleteAll);
router.route('/api/values/purge').delete(Values.purgeAll);

/*
 * Templates
 */

router.route('/api/templates').get(Templates.getAll);
router.route('/api/templates/:id').delete(Templates.get);
router.route('/api/templates/:by/:value').get(Templates.getBy);
router.route('/api/templates').post(Templates.create);
router.route('/api/templates').patch(Templates.patch);
router.route('/api/templates').delete(Templates.deleteAll);
router.route('/api/templates/purge').delete(Templates.purgeAll);

router.route('/api/pages').get(Pages.getAll);
router.route('/api/pages/:id').delete(Pages.get);
router.route('/api/pages/:by/:value').get(Pages.getBy);
router.route('/api/pages').post(Pages.create);
router.route('/api/pages').patch(Pages.patch);
router.route('/api/pages').delete(Pages.deleteAll);
router.route('/api/pages/purge').delete(Pages.purgeAll);


// router.route('*').get(routes.index);

// Start server
// app.listen('3000', () => {
//     // console.log('Express server listening on port %d in %s mode',
//     //     config.expressPort, app.settings.env);
// });

// const exitHandler = () => {
//   console.log('closing driver on programm exit');
//   process.exit(0);
// };

// process.on('SIGINT', () => { process.exit(0); });
// process.on('exit', exitHandler);

// process.once('SIGUSR2', () => {
//   console.log('[nodemon] cleanup');
// });
// 

export default () => {
  return router;
};

