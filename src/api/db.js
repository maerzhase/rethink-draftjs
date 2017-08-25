import T from 'thinky';
import '../../dev/env';

if (global.thinky === undefined) {
  global.thinky = T({
    host: process.env.HOST,
    port: process.env.PORT,
    db: process.env.DB,
  });
}


export default global.thinky;
