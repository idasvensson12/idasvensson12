const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){

});

const messageSchema = new mongoose.Schema({
  name: string  
});

const message = mongoose.model('Message', messageSchema);

const silence = new Message({name: 'Silence' });
console.log(silence.name);

message.Schema.methods.speak = function() {
const greeting = this.name

}
