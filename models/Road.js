import mongoose from 'mongoose';

const roadSchema = mongoose.Schema({
    name: String,
    block: String,
    sect: String,
    area: String
}, {collection: 'roads'});

const Road = mongoose.model('Road', roadSchema);

export default Road;