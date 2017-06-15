module.exports.iniciaChat = function(application,req,res){

    var dadosForm = req.body;

    console.log(req.body);

    application.get('io').emit('msgParaCliente',{ apelido: dadosForm.apelido, mensagem: ' acabou de entrar no chat' });

    res.render('chat',{dadosForm: dadosForm});
}