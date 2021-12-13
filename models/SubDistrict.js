import mongoose from 'mongoose';

const subdistSchema = mongoose.Schema({
    name: String,
    district: String
}, {collection: 'subDistricts'});

const SubDistrict = mongoose.model('SubDistrict', subdistSchema);

export default SubDistrict;