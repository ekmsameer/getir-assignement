import mongoose from 'mongoose'
mongoose.Promise = global.Promise;

//SETUP MONGOOSE
// mongoose.connect('mongodb://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study', {
//     useMongoClient: true
// });

mongoose.connect('mongodb://challengeUser:WUMglwNBaydH8Yvu@challenge-shard-00-01-xzwqd.mongodb.net:27017,challenge-shard-00-02-xzwqd.mongodb.net:27017,challenge-shard-00-00-xzwqd.mongodb.net:27017/getir-case-study?ssl=true&replicaSet=challenge-shard-0&readPreference=primary&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1&3t.uriVersion=3&3t.connection.name=challenge-shard-0&3t.databases=getir-case-study&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true&3t.sslTlsVersion=TLS', {
    useMongoClient: true
});