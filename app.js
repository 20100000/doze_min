import 'dotenv/config';
import express from 'express';
import audiobook from './app/api/audiobooks/router';
import login from './app/api/login/router';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use(login.path, login.router);

app.use(audiobook.path, audiobook.router);

app.listen(3000, () => {
  console.log('localhost:3000');
});
