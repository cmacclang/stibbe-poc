describe('FetchData', () => {

  global['fetch'] = require('node-fetch');

  const registerIssuedCapitalByName = require('./RegisterIssuedCapitalByName.js');

  it('should find all RegisterIssuedCapitalByName', () => {

    return registerIssuedCapitalByName()
      .then(data => {
        console.log(data)
      })
  })


});