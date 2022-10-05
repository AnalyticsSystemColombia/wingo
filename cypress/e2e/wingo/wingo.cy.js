const { type } = require("os");

    describe('ingreso a el sitio wingo', () => {
        // before(() =>{
        //     cy.log('Precondiciones');
        // })
        // after(() =>{
        //     cy.log('ejecutando todas las precondiciones');
        // })
        beforeEach( () => {
            cy.visit('https://www.wingo.com/')
        })
        it('ingresar datos para reservar', () => {
        //selecionando vuelo
        cy.get('#btnIdaVuelta').click({force: true});
        //selecionando ciudad de origen y ciudad de destino
        cy.get('.input-origen > .select-drop > .info-airport > .select > .styledSelect').click( {force: true})
        cy.get('[data-cod="BOG"] > .textCity').each(($ele) =>{
            if($ele.text() ==="Bogotá (BOG) El Dorado"){
                cy.wrap($ele).click()
            }
        })
        cy.get('#comboDestino > [data-cod="CLO"] > .textCity').each(($ele) =>{
            if($ele.text() =="Cali (CLO) Alfonso Bonilla Aragón"){
                cy.wrap($ele).click({force: true})
            }
        });
        //selecionando cantidad de pasajeros
        cy.get('#selectPasj > .info-airport').click()
        cy.get(':nth-child(1) > .bts-add > .plus').click()
        if(':nth-child(1) > .bts-add > .plus' === 0){
            ':nth-child(1) > .bts-add > .plus' + 1;
        }
        //cy.wrap(':nth-child(1) > .info').click({force: true})
        //cy.get('#adultos').click()
        
        cy.get('.styledSelectMoneda').click({force: true})
        cy.get('#currencies > :nth-child(2)').click({force: true})

        cy.get('#inputOutboundDate > .cont-calendar > .cont-months > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month1 > tbody > :nth-child(2) > :nth-child(2) > .day').click({force: true})
        cy.get('#date-window-container > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month2 > tbody > :nth-child(1) > :nth-child(4) > .day').click({force: true})
        .end()
        //cy.get('.btn-search').click({force: true}) 
        //cy.visit('https://booking.wingo.com/es/search/BOG/CLO/2022-10-03/2022-11-03/2/0/0/0/COP/0/0')

    })  
    describe('Selecionar viaje economico', () => {
        it('viaje de ida vuelo economico', ()=>{
            cy.get('.btn-search').click({force: true})
            cy.visit('https://booking.wingo.com/es/search/BOG/CLO/2022-10-03/2022-11-03/2/0/0/0/COP/0/0')
            //selecionamos plan economico
            cy.get('#week-ida > :nth-child(1) > .content-card-nav > .arrows > .next > img').click({force: true})
            //cy.get('#week-ida > :nth-child(1) > .content-card-nav > .active').click({force: true})
            cy.get('#week-ida > :nth-child(1) > .content-card-nav > :nth-child(2)').click({force: true})
            cy.get('#vuelos-ida > .container-selected > .cursor > [loadbundle=""] > :nth-child(1) > .card-list > :nth-child(1) > .card-list-item > .card-footer > .wingo-button').click({force:true})
            cy.get('.container-selected > .cursor > .row-eq-height > .border-right > .p-2 > .flex > label').click({force: true})

            
            cy.get('#vuelos-regreso > .container-selected > .cursor > [loadbundle=""] > :nth-child(1) > .card-list > :nth-child(1) > .card-list-item > .card-footer > .wingo-button').click({force:true})
            // cy.get('#vuelos-regreso > .container-selected > .cursor > .row-eq-height > .border-right > .p-2').click({force: true})
            // cy.get(':nth-child(1) > .card-list-item > .card-footer > .wingo-button').click({force: true})
            // cy.get('.wingo-button btn-purple-white btn-block m-0 active-button-purple ng-star-inserted').click({force: true})

            // cy.get('.continue > .btn-continuar').click({force:true})
            // cy.visit('https://booking.wingo.com/booking/services')
            
        })
    })
})