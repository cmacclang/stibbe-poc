const fetchData = require('./FetchData');

module.exports = (name) => {
    return fetchData.fetchRegisterIssuedCapital()
      .then(x => x.filter(x => x.name === name)[0].capital)
};
