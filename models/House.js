import mongoose from 'mongoose';

const houseSchema = mongoose.Schema({
    name: String,
    road: String,
    block: String,
    sect: String,
    area: String
}, {collection: 'houses'});

const House = mongoose.model('House', houseSchema);

export default House;