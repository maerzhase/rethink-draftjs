'use strict';

exports.__esModule = true;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _Values = require('./api/controllers/Values');

var _Values2 = _interopRequireDefault(_Values);

var _Pages = require('./api/controllers/Pages');

var _Pages2 = _interopRequireDefault(_Pages);

var _Templates = require('./api/controllers/Templates');

var _Templates2 = _interopRequireDefault(_Templates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();
// import testPage from './sample-data/draft-js-sample';


router.use((0, _cors2.default)());
// parse application/x-www-form-urlencoded
router.use(_bodyParser2.default.urlencoded({ extended: false }));
// parse application/json
router.use(_bodyParser2.default.json());

/*
 * BLOCKS
 */

router.route('/api/values').get(_Values2.default.getAll);
router.route('/api/values/:id').delete(_Values2.default.get);
router.route('/api/values').delete(_Values2.default.deleteAll);
router.route('/api/values/purge').delete(_Values2.default.purgeAll);

/*
 * Templates
 */

router.route('/api/templates').get(_Templates2.default.getAll);
router.route('/api/templates/:id').delete(_Templates2.default.get);
router.route('/api/templates/:by/:value').get(_Templates2.default.getBy);
router.route('/api/templates').post(_Templates2.default.create);
router.route('/api/templates').patch(_Templates2.default.patch);
router.route('/api/templates').delete(_Templates2.default.deleteAll);
router.route('/api/templates/purge').delete(_Templates2.default.purgeAll);

router.route('/api/pages').get(_Pages2.default.getAll);
router.route('/api/pages/:id').delete(_Pages2.default.get);
router.route('/api/pages/:by/:value').get(_Pages2.default.getBy);
router.route('/api/pages').post(_Pages2.default.create);
router.route('/api/pages').patch(_Pages2.default.patch);
router.route('/api/pages').delete(_Pages2.default.deleteAll);
router.route('/api/pages/purge').delete(_Pages2.default.purgeAll);

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

exports.default = function () {
  return router;
};