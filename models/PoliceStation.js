import mongoose from 'mongoose';

const psSchema = mongoose.Schema({
    name: String,
    district: String
}, {collection: 'policeStations'});

const PoliceStation = mongoose.model('PoliceStation', psSchema);

export default PoliceStation;