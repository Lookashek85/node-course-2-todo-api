const PropertiesReader = require('properties-reader');

var propertiesDB = PropertiesReader(__dirname+'/todoApp.properties');

//DB config
var mongo = propertiesDB.path().db.mongo;
//remote DB properties
var remoteLogin = propertiesDB.path().db.remote.remoteLogin;
var remotePwd = propertiesDB.path().db.remote.remotePwd;
var remoteDBHost = propertiesDB.path().db.remote.remoteDBHost;
var remoteDBName = propertiesDB.path().db.remote.remoteDBName;

var remoteConnectionString = `${mongo}${remoteLogin}:${remotePwd}${remoteDBHost}/${remoteDBName}`;

//local DB propeprties
var localhost = propertiesDB.path().db.local.localhost;
var portNumber = propertiesDB.path().db.local.portNumber;
var localDBName = propertiesDB.path().db.local.localDBName;

var localConnectionString = `${mongo}${localhost}:${portNumber}/${localDBName}`;


module.exports = {remoteConnectionString,localConnectionString};


