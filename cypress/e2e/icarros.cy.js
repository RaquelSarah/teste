describe('testes de seguros', () => {
  it('carregamento da página', () => {
    cy.visit('https://www.icarros.com.br/seguro-auto/seguroauto.jsp')

    // identificar o titulo Seguro Auto verificar se o título é Seguro Auto
    cy.get('.hero__title').should(($titulo) => {
      expect($titulo).to.contain('Seguro Auto')
    })
    // identificar o nome completo
    // digitar um nome
    cy.get('#qa_txt_npme').type('Luis carlos maure')

    // identificar o campo CPF

    cy.get('#qa_txt_cpf').type('543.272.020-53')
    // indentificar o campo email
    cy.get('#qa_txt_email').type('email@outlook.com')
    // identificar o checkbox de termos
    cy.get('#newsletter').click()

    //identificar o botao continuar cotação e verificar que o botão é clicável
    cy.get('#btn_cotar')
      .should('be.enabled')
      .click()
  })
})