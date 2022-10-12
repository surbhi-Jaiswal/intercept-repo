
describe('Intercept cypress',()=>
{
    it('TEST INTERCEPTION WITH CYPRESS',()=>
    {
     cy.visit('https://jsonplaceholder.typicode.com')
     cy.intercept({
        path : '/posts'
     }).as('posts'),
     cy.contains('/posts').click()
      cy.wait('@posts').then(({response})=>
        {
        cy.log(json.stringf(response)),
        console.log(json.stringf(response))
        })
        })

    })