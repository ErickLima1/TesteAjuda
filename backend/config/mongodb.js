const mongoose = require('mongoose') //Conexão com o mongoDB
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true, useUnifiedTopology: true})
    .catch(e => {
        const msg = "ERRO! Não Foi Possível Conectar Com O MongoDB!!"
        console.log('\x1b[41m%\x1b[37m', msg, '\x1b[0m')
    })