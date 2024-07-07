const mysql = require ('mysql2');

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "om",
});

connection.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Connected to the database');
  }
});


module.exports = connection;



// const mariadb  = require('mariadb');

 
// const pool = mariadb.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'robogarden'
// });
 
// connection.then((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Connected to the database');
//   }
// });

// connection = pool.getConnection();


// console.log(pool.getConnection());

// pool.query(`select * from robogarden.customers`, (error, result) => {
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// })







// const mariadb = require('mariadb');

// async function asyncFunction() {
//     let conn;
//     try {
//         // Create a new connection
//         conn = await mariadb.createConnection({
//           host: 'localhost',
//           user: 'root',
//           password: 'root',
//           database: 'robogarden',
//         });

//         // Print connection thread
//         console.log(`Connected! (id=${conn.threadId})`);
//     } catch (err) {
//         // Print error
//         console.log(err);
//     } finally {
//         // Close connection
//         if (conn) await conn.close();
//     }
// }

// asyncFunction();


// const mariadb = require('mariadb');
// const pool = mariadb.createPool({
//           host: 'localhost',
//           user: 'root',
//           password: 'root',
//           database: 'robogarden',
// });

// conn = pool.getConnection();

// console.log(conn);


// async function asyncFunction() {
//   let conn;
//   try {
// 	conn = await pool.getConnection();
// 	const rows = await conn.query("SELECT * from customers");
// 	console.log(rows); //[ {val: 1}, meta: ... ]
// 	// const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
// 	// console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

//   } catch (err) {
// 	throw err;
//   } finally {
// 	if (conn) return conn.end();
//   }
// }

// asyncFunction();