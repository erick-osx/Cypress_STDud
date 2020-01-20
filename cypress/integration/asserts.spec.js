/// <reference types = "cypress" />

//igualdade
it('Equality', () => {
    const a = 1

    expect(a).equal(1)
    expect(a, 'Deveria ser 1').equal(1) // passando uma msg
    expect(a).to.be.equal(1) //usando o to be para ficar mais 'legível'
    expect('a').not.to.be.equal('b')
})

it('Truthy', () => {
    const a = true
    const b = null
    let c

    expect(a).to.be.true
    expect(true).to.be.true
    expect(a).to.be.not.null
    expect(b).to.be.null
    expect(c).to.be.undefined

})

//Utilizando objetos 
it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }
    expect(obj).equal(obj)
    expect(obj).to.be.deep.equal({a:1, b:2})
    expect(obj).eql({a:1, b:2}) //forma abreviada do de cima
    expect(obj).include({a:1})
    expect(obj).to.have.property('b')
    expect(obj).to.have.property('b', 2) //verifica a propriedade e valor
    expect(obj).to.not.be.empty
    expect({}).to.be.empty
})

//Utilizando arrays
it('Arrays', () => {
    const arr = [1, 2, 3]
    expect(arr).to.have.members([1, 2, 3])
    expect(arr).to.include.members([1, 3])
    expect(arr).to.be.not.empty
    expect([]).to.be.empty
})

//tipos
it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

//Strings
it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.contains('de')
    expect(str).to.match(/de/)
    expect(str).to.match(/^String/) // Verificando se a string comeca com 'String'
    expect(str).to.match(/teste$/) //Verificando se a string termina com 'teste'
    expect(str).to.match(/.{15}/) //tamanho
    expect(str).to.match(/\w+/) //verifica se soh tem palavras/letras
    expect(str).to.match(/\D+/) //verifica se não tem numeros
})

//numeros

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3)
    expect(number).to.be.below(5)
    expect(floatNumber).to.be.eql(5.2123)
    expect(floatNumber).to.be.closeTo(5.2, 0.1) // ser próximo de 'x' com precisao 'y'
    expect(floatNumber).to.be.above(5)
})