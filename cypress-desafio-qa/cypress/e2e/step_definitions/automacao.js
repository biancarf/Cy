import {
  Given,
  When,
  Then,
} from '@badeball/cypress-cucumber-preprocessor';

const url = 'https://www.grocerycrud.com/v1.x/demo/bootstrap_theme';

Given('que estou na pagina principal', () => {
  cy.visit(`${url}`);
});

When('mudo o valor da combo select para Bootsrap V4 Theme', () => {
  // cy.get('#switch-version-select').click();
  // cy.findAllByText('Bootstrap V4 Theme').click();
});

When('clico para adicionar um novo usuario', () => {
  cy.get('.floatL.t5 > .btn').click();
});

When('preencho todo o formulario', () => {
  cy.get('#field-customerName').type('Bianca');
  cy.get('#field-contactLastName').type('França');
  cy.get('#field-contactFirstName').type('Bianca');
  cy.get('#field-phone').type('99988776655');
  cy.get('#field-addressLine1').type('Primeiro endereço');
  cy.get('#field-addressLine2').type('Segundo endereço');
  cy.get('#field-city').type('Florianópolis');
  cy.get('#field-state').type('Santa Catarina');
  cy.get('#field-postalCode').type('88000-500');
  cy.get('#field-country').type('Brasil');
  cy.get('span').click();
  cy.get('.chosen-search > input').type('Patterson');
  cy.get('.highlighted').click();
  cy.get('#field-creditLimit').type('$ 50.000,00');
  cy.get('#field-deleted').type('somente pra preencher o campo');
  cy.screenshot();
});

Then(
  'salvo o novo usuario e verifico a mensagem de cadastro realizado',
  () => {
    cy.get('#form-button-save').click();
    cy.wait(5000);
    cy.contains(
      'Your data has been successfully stored into the database.'
    ).should('be.visible');
    cy.screenshot();
  }
);

When('realizo a busca do usuario no campo search', () => {
  cy.get(':nth-child(3) > .form-control').type('Bianca');
});

Then(
  'seleciono e excluo o usuario e verifico a mensagem de usuario deletado',
  () => {
    cy.get('.no-border-left > .floatR > .btn > .fa').click();

    cy.get(':nth-child(1) > :nth-child(1) > .select-row').click();

    cy.get('.no-border-left > .floatL > .btn').click();

    cy.contains(
      'Are you sure that you want to delete this 1 item?'
    ).should('be.visible');

    cy.get(
      '.delete-multiple-confirmation > .modal-dialog > .modal-content > .modal-footer > .btn-danger'
    ).click();
    cy.wait(2000);

    cy.contains(
      'Your data has been successfully deleted from the database.'
    ).should('be.visible');
    cy.screenshot();
  }
);
