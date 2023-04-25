const express = require('express');
const app = express();
const PORT = 7171;

const io = require('socket.io')(80, {
  cors: {
    origin: '*'
  }
});


app.use(express.json());

app.post('/api/positions', (req, res) => {
  console.log("position: ",req.body);
  res.json({ message: 'Dados recebidos com sucesso!' });
  //enviando os dados para o canal positions com socket io
  io.emit('positions',JSON.stringify(req.body));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





