import mongoose from 'mongoose';

const districtSchema = mongoose.Schema({
    name: String,
    division: String
}, {collection: 'districts'});

const District = mongoose.model('District', districtSchema);

export default District;