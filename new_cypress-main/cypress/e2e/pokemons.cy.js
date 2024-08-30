describe('Проверка покупки аватара', function () {

    it('е2е тест покупки нового аватара', function () {
   		cy.visit('https://pokemonbattle.ru/');
   		cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
   		cy.get('#password').type('USER_PASSWORD');
   		cy.get('.auth__button').click({ force: true });
   		cy.wait(3000);
   		cy.get('.header__container > .header__id').click({ force: true });
   		cy.wait(5000);
   		cy.get('[href="/shop"]').click({ force: true });
   		cy.get('.available > button').first().click({ force: true });
   		cy.get('.pay__payform-v2 > :nth-child(2) > .pay__form-label-v2').contains('Номер');
   		cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('2200240723301087');
   		cy.get(':nth-child(1) > .pay__form-label-v2').contains('Срок');
   		cy.get(':nth-child(1) > .pay_base-input-v2').type('1234');
   		cy.get('.pay-inputs-box > :nth-child(2) > .pay__form-label-v2').contains('Код');
   		cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
   		cy.get('.pay__input-box-last-of > .pay__form-label-v2').contains('Имя');
   		cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('EKATERINA OBLYOZOVA');
   		cy.get('.pay-btn').click({ force: true });
   		cy.get('.payment__form-defolt').should('be.visible');
   		cy.get('.payment__fielheader').contains('Подтверждение покупки');
   		cy.get('#cardnumber').type('56456');
   		cy.get('.payment__submit-button').click({ force: true });
   		cy.get('.payment__font-for-success').should('be.visible');
   		cy.get('.payment__adv').should('have.css', 'color', 'rgb(85, 137, 241)').click({ force: true });
    })
})
