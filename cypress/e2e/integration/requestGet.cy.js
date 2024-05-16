describe('Get', () => {
  it('Executando GET', () => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/comments',
      qs: { name: 'alias odio sit' }
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.not.be.empty;
      expect(response.body).to.be.an('array');
      expect(response.body[0]).to.have.property('email', 'Lew@alysha.tv');
    });
  });
});