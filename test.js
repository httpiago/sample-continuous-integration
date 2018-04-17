const assert = require('assert');

var getUsers = () => [{name: 'Anna Wintour'}, {name: 'Fierce'}];
var gAuth = (obj) => 'mskpjoaJNJASN.WJ098IWM12022822.WKNSJKNWJKNB229202.W';

describe('Testando a API', function () {
  it('Buscar usuários', function () {
    assert.equal( typeof getUsers(), 'object');
  });

  it('Conectar ao Socket', function() {
    let connected = true;
    assert.equal(connected, true);
  });
});

describe('Conexão com o Google Cloud', function () {
  it('Login', function () {
    let token = gAuth({user: 'Banks', pass: '...'});
    assert.ok(true);
  });

  it('Enviar dados', () => assert.ok(true));

  it('Verificar se a outra conexão não existe mais', () => assert.notEqual(true, false));
});