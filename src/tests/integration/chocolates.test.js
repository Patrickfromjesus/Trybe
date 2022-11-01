const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
const fs = require('fs');
const sinon = require('sinon');
const app = require('../../utils/app');

chai.use(chaiHttp);

const mockFile = JSON.stringify({
  "brands": [
      {
          "id": 1,
          "name": "Lindt & Sprungli"
      },
      {
          "id": 2,
          "name": "Ferrero"
      },
      {
          "id": 3,
          "name": "Ghirardelli"
      }
  ],
  "chocolates": [
      {
          "id": 1,
          "name": "Mint Intense",
          "brandId": 1
      },
      {
          "id": 2,
          "name": "White Coconut",
          "brandId": 1
      },
      {
          "id": 3,
          "name": "Mon Chéri",
          "brandId": 2
      },
      {
          "id": 4,
          "name": "Mounds",
          "brandId": 3
      }
  ]
});

describe('Testes de integração', function () {
  /* beforeEach(function () {
    sinon.stub(fs, 'writeFile').resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  }); */

  describe('1. testes de chocolate', function () {

    it('A. Retorna o total de chocolates com o readFile', async function () {
      const total = { totalChocolates: 4 };

      const response = await chai
        .request(app).get('/chocolates/total');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(total);
    });

    it('B. Retornar os chocolates pela query do nome', async function () {
      const expectedBody = [
        {
          "id": 3,
          "name": "Mon Chéri",
          "brandId": 2
        },
        {
          "id": 4,
          "name": "Mounds",
          "brandId": 3
        }
      ];

      const response = await chai
        .request(app).get('/chocolates/search?name=Mo');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(expectedBody);
    });

    it('C. Retornar string vazia e 404, caso não ache o chocolate', async () => {
      const response = await chai
        .request(app).get('/chocolates/search?name=ZZZ');
        expect(response.status).to.be.equal(404);
        expect(response.body).to.deep.equal([]);
    });

    it('D. Atualização de chocolate com PUT', async function () {
      const newInfos = {
        name: 'Mint Pretty Good',
        brandId: 2
      };

      const response = await chai
        .request(app).put('/chocolates/1')
        .send(newInfos);
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal({
        id: 1,
        name: "Mint Pretty Good",
        brandId: 2
      });
    });

  });

});