describe("Test suite - conjunto de pruebas",()=>{

    
   
    
    
    it("Pruebas TDD",() =>{
        
        cy.visit("https://demoqa.com")
        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg > path').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-2 > .text').click()
        cy.log('Check Length')
        cy.get('input[type=radio]').should('have.length',3)
        cy.log("Check Class")
        cy.get('input[type=radio]').eq(2).should('have.class','disabled')
        cy.log('Exist Check Msje')
        cy.get('.mt-3').should('not.exist')
        cy.log('Text Check')
        cy.get('input[type=radio]').eq(0).click({force:true})
        cy.get('.mt-3').should('have.text','You have selected Yes')
        .and('include.text','Yes')
        .and('not.contain','No')
        cy.get('.text-success').should('have.css','color','rgb(40, 167, 69)')
    })

})