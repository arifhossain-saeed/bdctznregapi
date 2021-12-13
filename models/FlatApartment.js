import mongoose from 'mongoose';

const faSchema = mongoose.Schema({
    name: String,
    house: String
}, {collection: 'flatsApartments'});

const FlatApartment = mongoose.model('FlatApartment', faSchema);

export default FlatApartment;