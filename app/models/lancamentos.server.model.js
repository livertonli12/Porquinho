var mongoose     = require('mongoose'),
    Schema       = mongoose.Schema;

var LancamentoSchema = new Schema({
    tipo: {
        type: String,
        enum: ['Receita', 'Despesa', 'Transferência']
    },
    descricao: String,
    valor: {
        type: Number
    },
    pago: Boolean,
    recebido: Boolean,
    Data: Date,
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria'
    },
    conta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conta'
    },
    Tags: [String],
    Observacao: String,
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

mongoose.model('Lancamentos', LancamentoSchema);
