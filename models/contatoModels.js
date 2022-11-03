const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório'],
        trim: true,
        minLenght:[3, 'Nome deve conter pelo menos 3 caracteres']

    },
    fone: {
        type: String,
        required: [true, 'Numeor é obrigatório']
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Contato', contatoSchema);