import mongoose from 'mongoose';
var Schema = mongoose.Schema;
/*
* Records
* */
var RecordSchema = new Schema({});
module.exports = mongoose.model('records', RecordSchema);

