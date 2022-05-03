
const moongose = require("mongoose");

const connect=() =>{
    return  moongose.connect(
        'mongodb://rishianand:rishi123456@cluster0-shard-00-00.mlwwm.mongodb.net:27017,cluster0-shard-00-01.mlwwm.mongodb.net:27017,cluster0-shard-00-02.mlwwm.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-v4hpuo-shard-0&authSource=admin&retryWrites=true&w=majority'
    );
}


module.exports = connect;