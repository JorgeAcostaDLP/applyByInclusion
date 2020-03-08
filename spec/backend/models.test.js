const { Admins, Forms } = require('../../models');

test('Admins.all() should return an array', async () => {
  const result = (await Admins.all()) || [];
  expect(result.length).toEqual(2);
});

test('Forms.all() should return an array', async () => {
  const result = (await Forms.all()) || [];
  expect(result.length).toEqual(2);
});
