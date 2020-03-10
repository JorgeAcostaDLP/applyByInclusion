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
  expect(result.length).toEqual(2);
});

test('Forms.newForm(...) creates a new applicant form', async () => {
  const newForm = await Forms.newForm(
    'testInput',
    'testArea',
    true,
    new Date()
  );
  const result = (await Forms.all()) || [];
  expect(result.length).toEqual(3);
});

test('Forms.newForm(...) increases id by 1', async () => {
  const newForm = await Forms.newForm(
    'testInput',
    'testArea',
    true,
    new Date()
  );
  expect(newForm.dataValues.id).toEqual(4);
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

//Comments method testing
test('Comments.all() should return an array', async () => {
  const result = (await Comments.all()) || [];
  expect(result.length).toEqual(1);
});

test('Comment.newComment(...) creates a new Comment in table', async () => {
  await Comments.newComment(2, 1, 'This is another test comment');
  const result = await Comments.all();
  expect(result.length).toEqual(2);
});

test('Comments.newAdmin(...) increases id of newAdmin by 1', async () => {
  const newComment = await Comments.newComment('test1', 'testPassword1');
  expect(newComment.dataValues.id).toEqual(3);
});
test('Comments.newAdmin(...) populates the fields correctly', async () => {
  const newComment = await Comments.newComment(2, 1, 'last test');
  expect(newComment.dataValues.comment).toEqual('last test');
});
