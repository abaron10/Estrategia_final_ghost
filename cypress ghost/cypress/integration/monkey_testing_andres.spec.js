describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.wait(1000);
        randomInput2();
        randomEvent(50);
    })
})

function randomInput2(){
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    cy.get('#ember8').then($inputs => {
        var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
        if (!Cypress.dom.isHidden(randomInput)) {
            cy.wrap(randomInput).type('af.baron10@uniandes.edu.co',{ force: true });
           
        }
        cy.wait(1000);
        
    });
    cy.get('#ember10').then($inputs => {
        var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
        if (!Cypress.dom.isHidden(randomInput)) {
            cy.wrap(randomInput).type('Juanpablo1',{ force: true });
           
        }
        cy.wait(1000);
        
    });

    cy.get('#ember12').click();

}


function randomEvent(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        function randomLink(){
            cy.get('a').then($links => {
                var randomLink = $links.get(getRandomInt(0, $links.length));
                if(!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).click({force: true});
                   
                }
                cy.wait(1000);
              
            });
        }
        
        function randomButton(){
            cy.get('button').then($buttons => {
                var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
                if (!Cypress.dom.isHidden(randomButton)) {
                    cy.wrap(randomButton).click({ force: true });
           
                }
                
            });
        }
     
      
        function randomInput(){
            cy.get('input').then($inputs => {
                var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
                if (!Cypress.dom.isHidden(randomInput)) {
                    cy.wrap(randomInput).type('Esto es un monkey no un hacker',{ force: true });
                   
                }
                cy.wait(1000);
                
            });
        }


        // function randomSelectInput() {
        //     cy.once('fail', () => {
        //         // Skipping if the command below fails (i.e first row does not exist)
        //         randomEvent(monkeysLeft);  // done tells the test it ends here
        //       });
        //     cy.get('svg').then($inputs => {
         
        //         var randomSelect = $inputs.get(getRandomInt(0, $inputs.length));
        //         if (!Cypress.dom.isHidden(randomSelect)) {
        //             cy.wrap(randomSelect).eq(1).then(element => cy.get(randomSelect).select(element.val(),{ force: true }))
        //         }
        //     });
        // }
    
        
     
  
            var random = getRandomInt(0,4);
            if(random == 0){
                randomButton();
                //randomInput();
            }
            else if(random == 1){
                //randomInput();
                randomButton();
            }
            else if(random == 2){
                randomLink();
                randomButton();
            }
            else{
               randomButton();
            }
        
 
      

        monkeysLeft = monkeysLeft - 1;
        randomEvent(monkeysLeft);
        

    }   
}