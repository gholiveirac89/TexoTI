import * as BODY from '../fixtures/body_Put';

describe('Get', () => {
  it('Executando PUT', () => {
    const Id = 5;

    cy.request({
      method: 'PUT',
      url: `https://jsonplaceholder.typicode.com/users/${Id}`,
      body: BODY.Put_Dados
    })
      .then((response) => {
        expect(response).property('status').to.equal(200);

        expect(response.body.email).to.equal(BODY.Put_Dados.email);
        expect(response.body.address.geo.lat).to.equal(BODY.Put_Dados.address.geo.lat);
        expect(response.body.address.geo.lng).to.equal(BODY.Put_Dados.address.geo.lng);
      });
  });
});
