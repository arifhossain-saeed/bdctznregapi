import mongoose from 'mongoose';

const ccSchema = mongoose.Schema({
    name: String,
    district: String
}, {collection: 'cityCorporations'});

const CityCorporation = mongoose.model('CityCorporation', ccSchema);

export default CityCorporation;