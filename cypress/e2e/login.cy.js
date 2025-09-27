describe('Login', () => {
  beforeEach(() => {
     cy.visit('http://localhost:4000')
     cy.screenshot('apos-visitar-pagina')
  });
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.screenshot('apos-preencher-usuario-e-senha')
    cy.contains('button', 'Entrar').click()
    cy.screenshot('apos-clicar-em-entrar')  

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')  

  })
  it('Login com dados inválidos deve apresentar mensagem de erro', () => {

    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('64321')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })

})