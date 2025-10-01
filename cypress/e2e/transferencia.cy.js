describe('Transferência', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

    it('Deve transferir quando informo dados e valor validos', () => {
        cy.realizarTransferencia('Maria', 'João', '11')

        // Assert
        cy.verificarMensagemNoToast('Transferência realizada!')
     })

    it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token ', () => {
        //Action
        cy.realizarTransferencia('Maria', 'João', '6000.00')
        // Assert
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
     })
 })