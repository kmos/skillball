const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 3001 });

let currentWs;

wss.on('connection', function connection(ws) {
  currentWs = ws;
});

const express = require('express');
const app = express();
const port = 3000;

app.all('/:player/:type', (req, res) => {

  console.log(req.params);

  if(currentWs) {
    currentWs.send(JSON.stringify({
      player: req.params.player === 'black' ? 0 : 1,
      move: {
        one_click: 'left',
        double_click: 'right'
      }[req.params.type] || 'center'
    }));
  }

  res.send('ok');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))