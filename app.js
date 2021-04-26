/*Imports */
import express from 'express';
import mongoose from 'mongoose';

import { studentRouter } from './routes/studentRoutes.js';

const app = express();

/*Conexao com o MongoDB*/
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://' +
        process.env.DB_USER +
        ':' +
        process.env.DB_PWD +
        '@' +
        process.env.DB_HOST +
        ':' +
        process.env.DB_PORT +
        '/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Conectado no MongoDB');
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
  }
})();

app.use(express.json());
app.use(studentRouter);

// Iniciar servidor
app.listen(process.env.API_PORT, () => console.log('Servidor em execucao'));
