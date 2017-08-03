describe('FetchData', () => {

  global['fetch'] = require('node-fetch');

  const registerIssuedCapitalByName = require('./RegisterIssuedCapitalByName.js');

  it('should find all RegisterIssuedCapitalByName', () => {

    return registerIssuedCapitalByName()
      .then(data => {
        console.log(data)
      })
  })

  it('should find all RegisterIssuedCapitalByName', () => {

    return registerIssuedCapitalByName('ASM International N.V.')
      .then(data => {
        console.log(data)
      })
  })

  it('should find all RegisterIssuedCapitalByName', () => {

    return registerIssuedCapitalByName(null)
      .then(data => {
        console.log(data)
      })
  })


});