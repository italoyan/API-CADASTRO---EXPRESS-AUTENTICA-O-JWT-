const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://italoyan:funkdoloko321@apimongodb.sz3zz3u.mongodb.net/?retryWrites=true&w=majority", {}, (error)=>{
    if(error){
        console.log('Falha ao autenticar com mongodb');
        console.log(error);
        return;
    }

    console.log('Conexão com mongodb estável');
})

mongoose.Promise = global.Promise;

module.exports = mongoose;