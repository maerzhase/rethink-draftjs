import express from 'express';
import bodyParser from 'body-parser';
// import testPage from './sample-data/draft-js-sample';
import Pages from './api/controllers/Pages';
import Blocks from './api/controllers/Blocks';

// init express-app
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// // parse application/json
app.use(bodyParser.json());

/*
 * PAGES
 */

app.route('/api/pages').get(Pages.getAll);
app.route('/api/pages/:id').get(Pages.get);
app.route('/api/pages').post(Pages.createPage);
app.route('/api/pages').delete(Pages.deleteAll);
app.route('/api/pages/purge').delete(Pages.purgeAll);

/*
 * BLOCKS
 */

app.route('/api/blocks').get(Blocks.getAll);
app.route('/api/blocks/:id').delete(Blocks.get);
app.route('/api/blocks').delete(Blocks.deleteAll);
app.route('/api/blocks/purge').delete(Blocks.purgeAll);


// app.route('*').get(routes.index);

// Start server
app.listen('3000', () => {
    // console.log('Express server listening on port %d in %s mode',
    //     config.expressPort, app.settings.env);
});

const exitHandler = () => {
  console.log('closing driver on programm exit');
  process.exit(0);
};

process.on('SIGINT', () => { process.exit(0); });
process.on('exit', exitHandler);

process.once('SIGUSR2', () => {
  console.log('[nodemon] cleanup');
});
