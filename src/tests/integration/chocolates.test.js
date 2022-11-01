const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
const fs = require('fs');
const sinon = require('sinon');
const app = require('../../utils/app');

chai.use(chaiHttp);

const mockFile = {
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
};

describe('Testes de integração', function () {
  describe('1. testes de chocolate', function () {

    it('A. Retorna o total de chocolates com o readFile', async function () {
      const total = { totalChocolates: 4 };

      const response = await chai
        .request(app).get('/chocolates/total');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(total);
    });

  });

});