const Cliente = require('../models/cliente');

test('Testando se o objeto cliente tem a propriedade id, nome, cpf', () => {
  let cliente = new Cliente(1, "Erick", "122322307988637");
  expect(cliente.id).not.toBeUndefined();
  expect(cliente.nome).not.toBeUndefined();
  expect(cliente.cpf).not.toBeUndefined();
});

test('Validando um cliente com CPF inválido', () => {
  let cliente = new Cliente(1, "Erick", "122322307988637");
  expect(cliente.validarCPF()).toBe(false);
});

test('Validando um cliente com CPF inválido 1111111111111', () => {
  let cliente = new Cliente(1, "Erick", "1111111111111");
  expect(cliente.validarCPF()).toBe(false);
});

test('Validando um cliente com CPF 176.023.490-75', () => {
  let cliente = new Cliente(1, "Erick", "176.023.490-75");
  expect(cliente.validarCPF()).toBe(true);
});

test('Validando um cliente com CPF 17602349075', () => {
  let cliente = new Cliente(1, "Erick", "17602349075");
  expect(cliente.validarCPF()).toBe(true);
});