import * as express from 'express';
import * as path from 'path';
import { Message } from '@create-nx-workspace/api-interfaces';
const CLIENT_BUILD_PATH = path.join(__dirname, '../react-express');

const app = express();
app.use(express.static(CLIENT_BUILD_PATH));


const greeting: Message = { message: 'Connected to api!' };

app.get('/api', (req, res) => {
  setTimeout(() => res.send(greeting), 3500)
  
});

app.get('*', (request, response) => {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
