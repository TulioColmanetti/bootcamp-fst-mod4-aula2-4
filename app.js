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
        '/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Conectado no MongoDB');
  } catch (error) {
    console.log('Erro ao conectar no MongoDB: ' + error);
  }
})();

app.use(express.json());
app.use(studentRouter);

// Iniciar servidor
app.listen(process.env.PORT, () => console.log('Servidor em execucao'));
