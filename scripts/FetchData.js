const url = `https://www.afm.nl/export.aspx?type=f25d2ca1-b93c-4331-b025-85df328cd505&format=csv`;

let cache = null;

function clean(x) {
  return x != null ? x.replace(/^"(.*)"$/g, '$1') : x
}

module.exports = {
  fetchRegisterIssuedCapital: () => {
    const now = new Date();
    if (cache != null && cache.date > now - 3600000) {
      console.log('Cache fetchRegisterIssuedCapital');
      return Promise.resolve(cache.data);
    }

    console.log('Fetch fetchRegisterIssuedCapital');
    return fetch(url)
      .then(res => res.text())
      .then(res => {
        const lines = res.split(/\r?\n/);
        const head = lines.shift();
        const data = lines.map(line => {
          const items = line.split(";")
          return {
            date: new Date(clean(items[0])),
            name: clean(items[1]),
            subscription: clean(items[2]),
            place: clean(items[3]),
            capital: clean(items[4]),
            votes: clean(items[5]),
            certified: clean(items[6]),

          }
        });
        cache = {
          date: now,
          data: data
        };

        return data
      });
  }
};
