const express = require("express");
const OngController = require('./Controllers/OngController')
const IncidentController = require('./Controllers/IncidentController')
const ProfileController = require('./Controllers/ProfileController')

const SessionController = require('./Controllers/SessionController')

const routes = express.Router();

/**
 * METODOS
 * GET: Buscar/Listar dados
 * POST: Gerar novo dado
 * PUT: Alterar dado existente
 * DELETE: Apagar dado existente
 */

 /**
  * TIPOS DE PARAMETROS
  * Query Params: Parametros nomeados enviados na rota após o ? (filtros/paginação) pode-se utilizar mais de 1 com adição do &
  * Route Params: Parametros utilizados para identificar o recurso
  * Request Body: Corpo da requisição, utilizado para enviar os recursos
  */

routes.post('/login', SessionController.create)

routes.get('/ongs', OngController.list);
routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.list);
routes.get('/profile', ProfileController.list);

routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;