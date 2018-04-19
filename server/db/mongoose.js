var mongoose = require('mongoose');
const yargs = require('yargs');

var properties = require('./../../config/propertiesLoader');
var localConnectionStr = properties.localConnectionString;
var remoteConnectionString = properties.remoteConnectionString;

mongoose.Promise = global.Promise;


    var connStr = localConnectionStr;
    
    if(yargs.argv.r){
              connStr = remoteConnectionString;
    }
    
    if(connStr === null){
        throw new Error((e)=>{
            console.log('No connection string defined! '+e);
        });
    } 
     
    mongoose.connect( connStr, { useMongoClient: true }).then(()=>{
        //console.log(`connected to  == > ${connStr}` );

    }).catch((e)=>{
        console.log(e);
    });
    
    /*
  //  remoteConnectionString = null;
    console.log(connStr + ' Loaded...');
    if((yargs.argv.l && localConnectionStr) || (!remoteConnectionString && localConnectionStr)){
        connStr = localConnectionStr;  
       console.log(`Connected to local db host -> ${connStr}`);
    }else if(remoteConnectionString) {
        connStr = remoteConnectionString;
        console.log(`Connected to remote db host -> ${connStr}`);
    }
     */
 
module.exports = {mongoose,connStr};