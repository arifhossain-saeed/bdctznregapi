import mongoose from 'mongoose';

const blockSchema = mongoose.Schema({
    name: String,
    sect: String,
    area: String
}, {collection: 'blocks'});

const Block = mongoose.model('Block', blockSchema);

export default Block;