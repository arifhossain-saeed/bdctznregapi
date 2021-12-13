import mongoose from 'mongoose';

const wardSchema = mongoose.Schema({
    name: String,
    union: String,
    city_corporation: String
}, {collection: 'users'});

const Ward = mongoose.model('Ward', wardSchema);

export default Ward;