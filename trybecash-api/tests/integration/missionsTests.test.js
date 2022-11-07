const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
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

  it('2. Teste de post, dando erro.', async function (){
    const response = await chai
      .request(app).post('/missions').send({
        "name": "Xablau",
        "year": 1998,
        "country": "Seilá"
      });
      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep.equal({
        "message": "Todos os campos devem estar preenchidos e possuir exatamente as mesmas chaves."
      });
  });

  it('3. Teste do get', async function (){
    const mockFile = [
      {
        "id": 1,
        "name": "Mariner 2",
        "year": "1962",
        "country": "Estados Unidos",
        "destination": "Vênus"
      },
    ];

    sinon.stub(connection, 'execute').resolves(mockFile);

    const response = await chai
      .request(app).get('/missions');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(mockFile[0]);
  });

  it('4. Teste do PUT', async function (){
    sinon.stub(connection, 'execute').resolves([{ changedRows: 1 }]);

    const response = await chai
      .request(app).put('/missions/1')
      .send(
        {
          "name": "aaa",
          "year": 2000,
          "country": "bbb",
          "destination": "cccc"
        }
      );

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(1);
  });

  it('5. Teste de PUT, dando erro.', async function (){
    const response = await chai
      .request(app).put('/missions/1').send({
        "name": "Xablau",
        "year": 1998,
      });
      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep.equal({
        "message": "Todos os campos devem estar preenchidos e possuir exatamente as mesmas chaves."
      });
  });

});