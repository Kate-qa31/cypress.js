import * as data from "../helpers/default_data.json"

describe('Проверка авторизации', function () {

   beforeEach('Начало теста', function () {
         cy.visit('/')});
         
   it('Верный пароль и верный логин', function () {
        cy.get('#mail').type(data.login);
        cy.get('#pass').type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
    })
   it('Забыли пароль', function () {
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)').click();
        cy.get('#mailForgot').type(data.login);
        cy.get('#restoreEmailButton').contains('Отправить код').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
   it('Неверный пароль и верный логин', function () {
        cy.get('#mail').type(data.login);
        cy.get('#pass').type('fakepassword');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
   it('Верный пароль и неверный логин', function () {
        cy.get('#mail').type('katya@oblyozova.ru');
        cy.get('#pass').type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
   it('Верный пароль и логин без @', function () {
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
    })
   it('Приведение к строчным буквам в логине', function () {
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
    })
})



// 1. Найти поле логин и ввести правильный логин
// 2. Найти поле пароль и ввести правильный пароль
// 3. Найти кнопку войти и нажать на нее
// 4. Проверить, что авторизация прошла
