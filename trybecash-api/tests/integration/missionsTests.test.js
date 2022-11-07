const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const missionsRouter = require('../../src/routers/missionsRouters.router');
const connection = require('../../src/db/connection');
const app = require('../../src/utils/app');
const { expect, use } = chai;

use(chaiHttp);

describe('Teste de integração da tabela missions', function () {
  it('1. Teste de post', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 22 }]);

    const response = await chai
      .request(app).post('/missions')
      .send({
        "name": "OLoco, meu",
        "year": 2000,
        "country": "Mars",
        "destination": "EUA"
      });

    expect(response.status).to.be.equal(201);
    expect(response.body).to.deep.equal({ message: 'Usuário 22 criado com sucesso!' });
  });

  afterEach(sinon.restore);
  
});