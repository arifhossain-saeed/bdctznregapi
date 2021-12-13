import mongoose from 'mongoose';

const userDataSchema = mongoose.Schema({
    user_id: String,
    name: String,
    designation: String,
    station_office: String,
    joined_day: String,
    joined_month: String,
    joined_year: String,
    phone: String,
    email: String,
    supervisor: String,
    supervisor_designation: String,
    station_incharge: String,
    incharge_designation: String,
    image: String
}, {collection: 'userDatas'});

const UserData = mongoose.model('UserData', userDataSchema);

export default UserData;