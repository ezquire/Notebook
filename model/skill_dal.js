var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM skill;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(skill_id, callback) {
    var query = 'SELECT * FROM skill WHERE skill_id = ?';
    var queryData = [skill_id];
    console.log(query);

    connection.query(query, queryData, function(err, result) {

        callback(err, result);
    });
};

exports.insert = function(params, callback) {

    // insert the skill
    var query = 'INSERT INTO skill (skill_name, description) VALUES (?)';

    var queryData = [params.skill_name, params.description];

    connection.query(query, [queryData], function(err, result) {
        callback(err, result);
    });
};

exports.delete = function(skill_id, callback) {
    var query = 'DELETE FROM skill WHERE skill_id = ?';
    var queryData = [skill_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};

exports.update = function(params, callback) {
    var query = 'UPDATE skill SET skill_name = ?, description = ? WHERE skill_id = ?';
    var queryData = [params.skill_name, params.description, params.skill_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};

exports.edit = function(skill_id, callback) {
    var query = 'SELECT * FROM skill WHERE skill_id = ?';
    var queryData = [skill_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};