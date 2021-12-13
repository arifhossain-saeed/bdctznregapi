import mongoose from 'mongoose';

const cvSchema = mongoose.Schema({
    name: String,
    district: String,
    police_station: String
},{collections: 'citiesVillages'});

const CityVillage = mongoose.model('CityVillage', cvSchema);

export default CityVillage;