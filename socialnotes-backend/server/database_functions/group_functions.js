'use strict';
const dbFunctions = require("./db_functions.js");

// CREATE TABLE Sharegroups (
//     groupId varchar(36),
//     groupName varchar(50),
//     lastActive DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//     primary key (groupId)
// );

// Create a new group
exports.createGroup = (groupId, callback) => {
    const dateGroupCreated = new Date().toLocaleString();
    const sql = `INSERT INTO Sharegroups (groupId, lastActive) VALUES ('${groupId}', '${dateGroupCreated}')`;
    dbFunctions.makeSqlQuery(sql, callback);
};

// Add a user to an existing group
exports.addUserToGroup = (userId, groupId, callback) => {
    const sql = `INSERT INTO UsersGroups VALUES (${userId}, '${groupId}');`;
    dbFunctions.makeSqlQuery(sql, callback);
};

// Change group name
exports.modifyGroupName = (groupName, groupId, callback) => {
    const sql = `UPDATE Sharegroups SET groupName = '${groupName}' WHERE groupId LIKE '${groupId}';`;
    dbFunctions.makeSqlQuery(sql, callback);
};




