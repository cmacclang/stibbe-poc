const fetchData = require('./FetchData');

module.exports = {

  findAll: () =>{
    return fetchData.fetchRegisterIssuedCapital()
  },

  findByName: (name) => {
    return fetchData.fetchRegisterIssuedCapital()
      .then(x => x.filter(x => x.name === name))

  },

  findLatestByName: (name) => {
    return fetchData.fetchRegisterIssuedCapital()
      .then(x => x.filter(x => x.name === name)[0])

  }
};
