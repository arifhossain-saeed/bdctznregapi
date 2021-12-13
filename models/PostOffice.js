import mongoose from 'mongoose';

const poSchema = mongoose.Schema({
    name: String,
    sub_district: String,
    police_station: String,
    post_code: Number
}, {collection: 'postOffices'});

const PostOffice = mongoose.model('PostOffice', poSchema);

export default PostOffice;