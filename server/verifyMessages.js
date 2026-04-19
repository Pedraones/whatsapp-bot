async function getMessages(messages){
    if(messages){
        messages.forEach(element => {
            switch (element.text.body){
                case "#LISTAR COMANDOS#":
                    console.log("listar pedidos");
                    break;
                
                case "#VER PEDIDOS#":
                    console.log("ver pedidos");
                    break;
    
                case "#VER PEDIDO ESPECIFICO#":
                    console.log("ver pedido especifico");
                    break;
                
                case "#ADICIONAR PEDIDOS#":
                console.log("adicionar pedidos");
                break;
                
                case "#ATUALIZAR PEDIDO#":
                console.log("atualizar pedidos");
                break;
            }
        });
    }
}

module.exports = {
    getMessages: getMessages
}