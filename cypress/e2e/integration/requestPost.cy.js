import * as BODY from '../fixtures/body_Post';

describe('Get', () => {
  it('Executando GET', () => {
      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/users',
        body: BODY.Send_text_message 
      })
      .then((response) => {
        expect(response).property('status').to.equal(201);

        expect(response.body.name).to.equal(BODY.Send_text_message.name);
        expect(response.body.username).to.equal(BODY.Send_text_message.username);
        expect(response.body.email).to.equal(BODY.Send_text_message.email);
        expect(response.body.address.street).to.equal(BODY.Send_text_message.address.street);
        expect(response.body.address.suite).to.equal(BODY.Send_text_message.address.suite);
        expect(response.body.address.city).to.equal(BODY.Send_text_message.address.city);
        expect(response.body.address.zipcode).to.equal(BODY.Send_text_message.address.zipcode);
        expect(response.body.address.geo.lat).to.equal(BODY.Send_text_message.address.geo.lat);
        expect(response.body.address.geo.lng).to.equal(BODY.Send_text_message.address.geo.lng);
        expect(response.body.phone).to.equal(BODY.Send_text_message.phone);
        expect(response.body.website).to.equal(BODY.Send_text_message.website);
        expect(response.body.company.name).to.equal(BODY.Send_text_message.company.name);
        expect(response.body.company.catchPhrase).to.equal(BODY.Send_text_message.company.catchPhrase);
        expect(response.body.company.bs).to.equal(BODY.Send_text_message.company.bs);



      });
    });
  });

