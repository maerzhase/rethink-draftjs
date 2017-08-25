import r from 'rethinkdb';
import '../dev/env';

let connection;

// Create the table Block
const createTableBlock = () => {
  r.db(process.env.DB).tableCreate('Block').run(connection, (error, result) => {
    if (error) console.log(error);
    if ((result != null) && (result.tables_created === 1)) {
      console.log('Table `Block` created');
    } else {
      console.log('Error: Table `Block` not created');
    }
  });
};

// Create the table Page
const createTablePage = () => {
  r.db(process.env.DB).tableCreate('Page').run(connection, (error, result) => {
    if (error) console.log(error);
    if ((result != null) && (result.tables_created === 1)) {
      console.log('Table `Page` created');
    } else {
      console.log('Error: Table `Page` not created');
    }
    createTableBlock();
  });
};

// Create the database
const createDatabase = () => {
  r.dbCreate(process.env.DB).run(connection, (error, result) => {
    if (error) console.log(error);
    if ((result != null) && (result.dbs_created === 1)) {
      console.log(`Database '${process.env.DB}' created`);
    } else {
      console.log(`Error: Database '${process.env.DB}' not created`);
    }
    createTablePage();
  });
};

const connect = () => {
  r.connect({
    host: process.env.HOST,
    port: process.env.PORT,
    db: process.env.DB,
  }, (error, conn) => {
    if (error) throw error;
    connection = conn;
    createDatabase();
  });
};

connect();
