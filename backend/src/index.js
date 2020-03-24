const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);


/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar umainformação no back-end 
  *
  */

  /**
   * Tipos de parâmetro:
   * 
   * Query params: Parâmetro nomeados, enviados na rota após o simbolo de "?" (Filtros, paginação)
   * Ex: http://localhost:3333/users?name=Diego
   * 
   * Route Params: Parâmetros utilizados para identificar recursos
   * 
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */



app.listen(3333);