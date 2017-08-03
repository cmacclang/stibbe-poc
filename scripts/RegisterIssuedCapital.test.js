describe('FetchData', () => {

  global['fetch'] = require('node-fetch');

  const registerIssuedCapital = require('./RegisterIssuedCapital.js');

  it('should find all RegisterIssuedCapital', () => {

    return registerIssuedCapital.findAll()
      .then(data => {
        //console.log(data)
      })
  })

  it('should find RegisterIssuedCapital by name', () => {

    return registerIssuedCapital.findByName('ASM International N.V.')
      .then(data => {
        //console.log(data)
      })
  })

  it('should find RegisterIssuedCapital by name', () => {

    return registerIssuedCapital.findLatestByName('ASM International N.V.')
      .then(data => {
        console.log(data)
      })
  })

});