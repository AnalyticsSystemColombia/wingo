
    describe('ingreso a el sitio wingo', () => {
        // before(() =>{
        //     cy.log('Precondiciones');
        // })
        // after(() =>{
        //     cy.log('ejecutando todas las precondiciones');
        // })
        // beforeEach( () => {
        //     cy.visit('https://automationpractice.com/index.php')
        // })
        it('seleciona categoria women', () => {
            cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category')
        })
        // it('Busca categoria', () => {
        //   cy.get('#search_query_top').clear().type('hola').clear()
        //   })
        it('selecionar top', () => {
            cy.get('#layered_category_4').check();
            cy.get('#layered_id_attribute_group_3').check();

        })
        it("selecionar un precio", () => {
            cy.get('#selectProductSort').select('Price: Highest first');
        })
        
      })