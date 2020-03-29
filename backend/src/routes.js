const express = require('express');

const OngController = require('./controllers/OngControllers');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Rota / Recurso
 */

 /**
  * Metodos HTTP:
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Banco de Dados:
  * SQL: MySQL, SQLite, PostgreSQL
  * NoSQL : MongoDB
  */

  /**
   * Acessar banco:
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;