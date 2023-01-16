const list = document.querySelector('#list');
const addnew = document.querySelector('#addnew');
const contact = document.querySelector('#contact');
const li = document.querySelector('#top');
const add = document.querySelector('#bookform');
const contac = document.querySelector('#contac');
const nav = (first, second, third) => {
  first.style.display = 'block';
  second.style.display = 'none';
  third.style.display = 'none';
};
list.addEventListener('click', () => {
  nav(li, add, contact);
});

addnew.addEventListener('click', () => {
  nav(add, li, contact);
});

contac.addEventListener('click', () => {
  nav(contact, add, li);
});

export default nav;