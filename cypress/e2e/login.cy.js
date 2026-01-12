describe('Login', () => {
  it('Login com usuario válido', () => {
    cy.visit('https://automationteststore.com/')
    cy.wait(2000)
    cy.get("#customernav").click()

    login('testmok', '123456')

    cy.get('[class="subtext"]').should('have.text', 'test')

    cy.wait(1000)
    cy.get('[data-original-title="Logoff"]').click()
    cy.wait(1000)
    cy.get('[class="maintext"]').should('have.text', ' Account Logout')

  })

  it('Login com usuario inválido', () => {
    cy.visit('https://automationteststore.com/')
    cy.wait(2000)
    cy.get("#customernav").click()


    login('te@#$@#!@#stmok', '123456')

    cy.wait(1000)


    cy.get('[class="alert alert-error alert-danger"]').contains(' Error: Incorrect login or password provided.')
    cy.wait(1000)


  })

  it('Login com usuario nulo', () => {
    cy.visit('https://automationteststore.com/')
    cy.wait(2000)
    cy.get("#customernav").click()


    login(' ', '123456')

    cy.wait(1000)


    cy.get('[class="alert alert-error alert-danger"]').contains(' Error: Incorrect login or password provided.')
    cy.wait(1000)


  })


  it('Login com usuario válido com senha válida', () => {
    cy.visit('https://automationteststore.com/')
    cy.wait(2000)
    cy.get("#customernav").click()

    login('testmok', '123456')

    cy.get('[class="subtext"]').should('have.text', 'test')

    cy.wait(1000)
    cy.get('[data-original-title="Logoff"]').click()
    cy.wait(1000)
    cy.get('[class="maintext"]').should('have.text', ' Account Logout')


  })


  it('Login com usuario válido com senha inválida', () => {
    cy.visit('https://automationteststore.com/')
    cy.wait(2000)
    cy.get("#customernav").click()

    login('testmok', '@#$@#$@#$')


    cy.get('[class="alert alert-error alert-danger"]').contains(' Error: Incorrect login or password provided.')
    cy.wait(1000)


  })

  it('Login com usuario válido com senha nula', () => {
    cy.visit('https://automationteststore.com/')
    cy.wait(2000)
    cy.get("#customernav").click()

    login('testmok', ' ')


    cy.get('[class="alert alert-error alert-danger"]').contains(' Error: Incorrect login or password provided.')
    cy.wait(1000)


  })
})


function login(username, password) {
  cy.get("input#loginFrm_loginname").type(username)
  cy.get("input#loginFrm_password").type(password)

  cy.wait(2000)
  cy.get('[title="Login"]').click()
  //data-original-title="Logoff"
  cy.wait(1000)
}