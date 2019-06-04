let todos = [];
const $inputTodo = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $checkAll = document.querySelector('#ck-complete-all');
const $completedTodos = document.querySelector('.completed-todos');
const $btn = document.querySelector('.btn');
const $activeTodos = document.querySelector('.active-todos');
const $nav = document.querySelector('.nav');
let navState = 'all';


function generateId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

function completedTodos() {
  $completedTodos.innerHTML = todos.filter(todo => todo.completed).length;
}

function activeTodos() {
  $activeTodos.innerHTML = todos.filter(todo => !todo.completed).length;
}

// html에 넣기
function render(todosFromServer) {
  let html = '';
  todos = todosFromServer;

  const _todos = todos.filter(todo => {
    if (navState === 'active') return !todo.completed;
    if (navState === 'completed') return todo.completed;
    return true;
  });

  _todos.forEach(todo => {
    html += `<li id="${todo.id}" class="todo-item">
    <input id="ck-${todo.id}" class="custom-checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
    <label for="ck-${todo.id}">${todo.content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>\n`;
  });

  $todos.innerHTML = html;

  completedTodos();
  activeTodos();
}

// ajax get
function getTodos() {
  fetch('/todos')
    .then(res => res.json())
    .then(render)
    .catch(console.error);
}

// 입력 post
function postTodos(value) {
  fetch('/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: generateId(), content: value, completed: false })
  }).then(res => res.json())
    .then(render)
    .catch(console.error);
}

// 체크 patch
function checkTodos(id, completed) {
  fetch(`/todos/${id}`, {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ completed })
  }).then(res => res.json())
    .then(render)
    .catch(console.error);
}

// 모두 체크 patch
function checkAllTodos(completed) {
  fetch('/todos', {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ completed })
  }).then(res => res.json())
    .then(render)
    .catch(console.error);
}

// 완료된 거 삭제
function allRemove() {
  fetch('/todos/completed', {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' }
  }).then(res => res.json())
    .then(render)
    .catch(console.error);
}

// 요소만 삭제
function remove(id) {
  fetch(`/todos/${id}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' }
  }).then(res => res.json())
    .then(render)
    .catch(console.error);
}

// 삭제
$todos.addEventListener('click', e => {
  if (!e.target.classList.contains('remove-todo')) return;

  remove(+e.target.parentNode.id);
});

// 체크박스
$todos.addEventListener('change', e => {
  const id = +e.target.parentNode.id;

  checkTodos(id, e.target.checked);
});

// 인풋창 엔터시 POST
$inputTodo.addEventListener('keyup', e => {
  const value = $inputTodo.value.trim();

  if (value === '' || e.keyCode !== 13) return;
  postTodos(value);
  $inputTodo.value = '';
});

// 전체 체크
$checkAll.addEventListener('change', function () {
  checkAllTodos(this.checked);
});

// 완료된 것만 삭제
$btn.addEventListener('click', () => {
  allRemove();
});

// 탭 클릭
$nav.addEventListener('click', function (e) {
  if (e.target.nodeName !== 'LI') return;

  [...this.children].map(navItem => navItem.classList.remove('active'));

  e.target.classList.add('active');

  navState = e.target.id;

  getTodos();
});

window.onload = getTodos;
