const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    titulo:{
        type: String,
        required: true,
    },
    descricao:{
        type: String,
        required: true
    }, 
    url:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = model('Product', ProductSchema);