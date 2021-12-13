import mongoose from 'mongoose';

const areaSchema = mongoose.Schema({
    name: String,
    city_village: String
}, {collection: 'areas'});

const Area = mongoose.model('Area', areaSchema);

export default Area;