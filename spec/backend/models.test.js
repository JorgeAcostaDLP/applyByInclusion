const { Admins, Forms, Comments } = require('../../models');

//Admins method testing
test('Admins.all() should return an array', async () => {
  const result = (await Admins.all()) || [];
  expect(result.length).toEqual(2);
});

test('Admins.newAdmin(...) creates a new Admin in table', async () => {
  await Admins.newAdmin('test1', 'testPassword1');
  const result = await Admins.all();
  expect(result.length).toEqual(3);
});

test('Admins.newAdmin(...) increases id of newAdmin by 1', async () => {
  const newAdmin = await Admins.newAdmin('test1', 'testPassword1');
  expect(newAdmin.dataValues.id).toEqual(4);
});
test('Admins.newAdmin(...) populates the fields correctly', async () => {
  const newAdmin = await Admins.newAdmin('test', 'testPassword');
  expect(newAdmin.dataValues.userName).toEqual('test');
});

//Forms method testing
test('Forms.all() should return an array', async () => {
  const result = (await Forms.all()) || [];
  expect(result.length).toEqual(3);
});

test('Forms.single() should return a single form entry', async () => {
  const result = (await Forms.single(1)) || [];
  expect(result.length).toEqual(1);
});

test('Forms.newForm(...) creates a new applicant form', async () => {
  const newForm = await Forms.newForm(
    'testInput',
    'testArea',
    true,
    new Date()
  );
  const result = (await Forms.all()) || [];
  expect(result.length).toEqual(4);
});

test('Forms.newForm(...) increases id by 1', async () => {
  const newForm = await Forms.newForm(
    'testInput',
    'testArea',
    true,
    new Date()
  );
  expect(newForm.dataValues.id).toEqual(5);
});

test('Forms.newForm(...) populates fields correctly', async () => {
  const newForm = await Forms.newForm(
    'testInput',
    'testArea',
    true,
    new Date()
  );
  expect(newForm.dataValues.textInput).toEqual('testInput');
});

test('Forms.newForm(...) adds status field defaulting to "new"', async () => {
  const newForm = await Forms.newForm(
    'testInput',
    'testArea',
    true,
    new Date()
  );
  expect(newForm.dataValues.status).toEqual('New');
});

test('Forms.update(...) will update status field', async () => {
  a = await Forms.updateForm(1, 'Accepted');
  results = await Forms.findAll();
  expect(results[0].dataValues.status).toEqual('Accepted');
});

//Comments method testing
test('Comments.all() should return an array', async () => {
  const result = (await Comments.all()) || [];
  expect(result.length).toEqual(1);
});

test('Comment.newComment(...) creates a new Comment in table', async () => {
  await Comments.newComment(2, 'john cena', 1, 'This is another test comment');
  const result = await Comments.all();
  expect(result.length).toEqual(2);
});

test('Comments.newComment(...) populates the fields correctly', async () => {
  const newComment = await Comments.newComment(2, 'john cena', 1, 'last test');
  expect(newComment.dataValues.comment).toEqual('last test');
});
