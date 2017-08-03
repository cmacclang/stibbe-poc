describe('FetchData', () => {

  global['fetch'] = require('node-fetch');

  it('should load data from afm website', () => {


    const fetchData = require('./FetchData');
    return fetchData.fetchRegisterIssuedCapital()
      .then(data => {
        console.log(data)
        return fetchData.fetchRegisterIssuedCapital()
      })
      .then(data => console.log(data))
  })

});