var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var ContaSchema = new Schema({
    nome: String,
    saldo: Number,
    tipo: {
        type: String,
        enum: ['Conta Corrente', 'Dinheiro', 'Poupança', 'Investimento', 'Outros']
    },
    cor: String,
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

mongoose.model('Contas', ContaSchema);
