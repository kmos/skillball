const http = require('http');

const WebSocket = require('ws');
 
const express = require('express');
const app = express();
const port = 3000;

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

let currentWs;

wss.on('connection', function connection(ws) {
  currentWs = ws;
});

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

server.listen(port);

console.log(`Skillball listening on port ${port}!`);