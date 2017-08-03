const assert = require('assert');
const cmacc = require('cmacc-compiler');

describe('stibbe-poc', function () {

  global.fs = require('fs');
  global.fetch = require('node-fetch');

  it('Test1', function (done) {
    const file = "file://" + __dirname + "/Index.cmacc";
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
        console.log(JSON.stringify(x, null, 2))
        return cmacc.remarkable.render(x)
      })
      .then(html => {
        const expect = '<h1>ASM International N.V.</h1>\n<p>Het totaal geplaatst kapitaal is: 2491895,76000</p>\n';
        assert.equal(html, expect);
        done();
      })
      .catch(done);

  });



});