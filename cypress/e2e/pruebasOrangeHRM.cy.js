describe("Test suite - conjunto de pruebas",()=>{

   beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      }) 

      it.only("Validar pagina de inicio",() =>{
       
        cy.get('.orangehrm-login-branding > img').should("be.visible")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible")
        cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').contains("OrangeHRM").toString
        cy.get('.oxd-button').should("be.visible")
    })  
    
    it("Iniciar sesion",() =>{
       
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-autocomplete-text-input > input').type("Alexa Wolf")
        let rndnum = Math.random() *2
        cy.get(':nth-child(2) > .oxd-input').type("alexa1"+rndnum.toString())
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon') .select('Admin')
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').select("1")
        cy.get('.orangehrm-header-container > .oxd-button').click()
      
    })      

})