const mysql = require('mysql2/promise');
const { dbConfig } = require('./config');

async function executeQuery(sql, arguments = []) {
    let connection;
    try {
        // Creating a connection to the database
        connection = await mysql.createConnection(dbConfig);

        // Executing the provided SQL query
        const [rows] = await connection.execute(sql, arguments);

        return [rows, null];
    } catch (error) {
        return [null, error];
    } finally {
        if (connection) {
            connection.end();
        }
    }
}

module.exports = { executeQuery };