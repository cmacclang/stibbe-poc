const assert = require('assert');
const cmacc = require('cmacc-compiler');

describe('stibbe-poc', function () {

  global.fs = require('fs');
  global.fetch = require('node-fetch');

  it('Test1', function (done) {
    const file = "file://" + __dirname + "/TomTom_NV.cmacc";
    cmacc.compile(file)
      .then(ast => {
        return ast;
      })
      .then(x => {
        //console.log(x)
        return x
      })
      .then(cmacc.render)
      .then(x => {
        // console.log(JSON.stringify(x, null, 2))
        return cmacc.remarkable.render(x)
      })
      .then(html => {
        const expect = '';
        assert.equal(html, expect);
        done();
      })
      .catch(done);

  });



});