const express = require("express");
const Sql = require("mssql/msnodesqlv8");
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());


    // // config for your database
    // const config = {
    //     server: "localhost\\SQLEXPRESS",
    //     database: "master",
    //     driver: "msnodesqlv8",
    //     options: {
    //       trustedConnection: true
    //     }
    // };

// Connect to SQL Server using Windows Auth
const conn = new Sql.ConnectionPool({
    connectionString: 'Driver={ODBC Driver 18 for SQL Server};Server=localhost\\SQLEXPRESS;Database=master;Trusted_Connection=yes;TrustServerCertificate=yes'
});

conn.connect()
    .then(function () {
      console.log("Connected to SQL Server");

})
    .catch(function (err) {
      console.log(err);
    }
    );

 
    // const sql = new Sql(config);  
    // Sql.on('connect', function(err) {  
    //     // If no error, then good to proceed.
    //     console.log("Connected");  
    //     if (err) console.log(err);

    //     // create Request object
    //     const request = new Sql.Request();
           
    //     // query to the database and get the records
    //     request.query('select * from Note', function (err, recordset) {
            
    //         if (err) console.log(err)

    //         // send records as a response
    //         res.send(recordset);
            
    //     });
    // });

//     // connect to your database
//     Sql.connect(config, function (err) {
    
//         if (err) console.log(err);

//         // create Request object
//         var request = new Sql.Request();
           
//         // query to the database and get the records
//         request.query('select * from Note', function (err, recordset) {
            
//             if (err) console.log(err)

//             // send records as a response
//             res.send(recordset);
            
//         });
//     });
// });

var server = app.listen(3000, function () {
    console.log('Server is running..');
});


// const express = require("express");
// const sql = require("mssql");

// const app = express();

// // SQL Server configuration
// var config = {
//     "user": "  ", // Database username
//     "password": "  ", // Database password
//     "server": "  ", // Server IP address
//     "database": "Training", // Database name
//     "options": {
//         "encrypt": false // Disable encryption
//     }
// }

// Connect to SQL Server
// sql.connect(config, err => {
//     if (err) {
//         throw err;
//     }
//     console.log("Connection Successful!");
// });

// // Define route for fetching data from SQL Server
// app.get("/", (request, response) => {
//     // Execute a SELECT query
//     new sql.Request().query("SELECT * FROM Employee", (err, result) => {
//         if (err) {
//             console.error("Error executing query:", err);
//         } else {
//             response.send(result.recordset); // Send query result as response
//             console.dir(result.recordset);
//         }
//     });
// });

// // Start the server on port 3000
// app.listen(3000, () => {
//     console.log("Listening on port 3000...");
// });