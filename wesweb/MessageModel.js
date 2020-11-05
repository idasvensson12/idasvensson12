const messageSchema = new mongoose.Schema({
    name: string  
  });
  
  const message = mongoose.model('Message', messageSchema);
  
  const silence = new Message({name: 'Silence' });
  console.log(silence.name);
  
  message.Schema.methods.speak = function() {
  const greeting = this.name
  
  }