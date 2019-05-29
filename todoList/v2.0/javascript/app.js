let todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];
const $inputTodo = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $checkAll = document.querySelector('#ck-complete-all');
const $completedTodos = document.querySelector('.completed-todos');
const $btn = document.querySelector('.btn');
const $activeTodos = document.querySelector('.active-todos');
const $nav = document.querySelector('.nav');
let navState = 'all';

render();

function render() {
  let html = '';

  const _todos = todos.filter(function (todo) {
    if (navState === 'active') return !todo.completed;
    if (navState === 'completed') return todo.completed;
    return true;
  });

  _todos.forEach(todo =>
    html += `<li id="${todo.id}" class="todo-item">
    <input id="ck-${todo.id}" class="custom-checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
    <label for="ck-${todo.id}">${todo.content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>\n`);

  $todos.innerHTML = html;

  completedTodos();
  activeTodos();
}

function generateId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

function completedTodos() {
  $completedTodos.innerHTML = todos.filter(function (todo) {
    return todo.completed;
  }).length;
}

function activeTodos() {
  $activeTodos.innerHTML = todos.filter(function (todo) {
    return !todo.completed;
  }).length;
}

$todos.addEventListener('click', function (e) {
  if (!e.target.classList.contains('remove-todo')) return;

  todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
  render();
});

$todos.addEventListener('change', function (e) {
  const id = +e.target.parentNode.id;

  todos = todos.map(todo => (todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));

  // 스프레드연산자
  // todos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));

  render();
});

$inputTodo.addEventListener('keyup', function (e) {
  const value = $inputTodo.value.trim();

  if (value === '' || e.keyCode !== 13) return;
  todos = [...todos, { id: generateId(), content: value, completed: false }];
  $inputTodo.value = '';
  render();
});

$checkAll.addEventListener('change', function () {
  todos = todos.map(todo => (this.checked ? Object.assign({}, todo, { completed: true }) : Object.assign({}, todo, { completed: false })));
  // todos = todos.map(todo => (this.checked ? { ...todo, completed: true } : { ...todo, completed: false }));

  render();
});

$btn.addEventListener('click', function () {
  todos = todos.filter(todo => !todo.completed);
  render();
});

$nav.addEventListener('click', function (e) {
  if (e.target.nodeName !== 'LI') return;

  [...this.children].map(navItem => navItem.classList.remove('active'));

  e.target.classList.add('active');

  navState = e.target.id;

  render();
});


// html이 다 pasing되고 리소스까지 로드되고 나서 한다.
// window.onload = function;
