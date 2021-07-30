const obj = {
  id: 1,
  name: 'Tester Testowy',
  pwdHash: 'abcdef1749cdf927ac98d7492afff9c729accccf',
  isAdmin: true,
  hasAvatar: true,
};

// return id, name, hasAvatar
function filter(object) {
  const { id, name, hasAvatar } = object;
  // console.log(id, name, hasAvatar);
  return (
    {
      id,
      name,
      hasAvatar,
    }
  );
}

console.log(obj);
console.log(filter(obj));
