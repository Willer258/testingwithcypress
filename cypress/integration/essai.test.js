describe('Test de la page App', () => {
    it('Affichage de la page', () => {
        cy.visit("http://localhost:3000");
    });

    it('verif du title', () => {
        cy.get('h1');
        cy.should(Titre => {
            expect(Titre).to.contain("Hello world")
        })
    })
    it('verif du content', () => {
        cy.get('.text-test');
        cy.should(Texte => {
            expect(Texte).to.contain('Ce texte est bleu !');
        });
    });

    it('verif de la color', () => {
        cy.get('.text-test');
        cy.should("have.css", "color", "rgb(0, 0, 255)");
    })

    describe('Verification du boutton', () => {
        it('verif du boutton', () => {
            cy.get('.button-red');
            cy.contains("Désactivé");
            cy.should("have.css", 'color', 'rgb(255, 255, 255)');
            cy.should("have.css", "background-color", "rgb(207, 10, 29)");
        });
        it('verif du changement de bouton', () => {
            cy.get('.button-red').click();
            cy.contains("Activé");
            cy.should("have.css", 'color', 'rgb(255, 255, 255)');
            cy.should("have.css", "background-color", "rgb(76, 175, 80)")
        });
         it("verif du rechangement de bouton", () => {
           cy.get(".button-green").click();
           cy.contains("Désactivé");
           cy.should("have.css", "color", "rgb(255, 255, 255)");
           cy.should("have.css", "background-color", "rgb(207, 10, 29)");
         });
    });
});

