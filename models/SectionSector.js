import mongoose from 'mongoose';

const secSchema = mongoose.Schema({
    name: String,
    area: String
}, {collection: 'sectionsSectors'});

const SectionSector = mongoose.model('SectionSector', secSchema);

export default SectionSector;