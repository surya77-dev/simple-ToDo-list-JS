const TodoName = [{
    name: 'hey',
    dueDate: '23-05-23',
},
{
  name: 'bro',
  dueDate: '13-10-23'}];

OnhtmlTodo();

function OnhtmlTodo() {
    let TodoListHtml = '';

    for (let i = 0; i<TodoName.length; i++){
        const todoObject = TodoName[i];
        const { name, dueDate } = todoObject;  
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="Todo-delete js-delete-button"> Delete </button>
        `
        TodoListHtml += html;
    }
    
    document.querySelector('.js-todo-list')
      .innerHTML = TodoListHtml;
    

    document.querySelectorAll('.js-delete-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                TodoName.splice(index, 1);
                OnhtmlTodo();
            });

        });
}

    document.querySelector('.js-todo-add')
    .addEventListener('click', () => {
        TodoGetName();
    });



function TodoGetName() {
    const inputElement = document.querySelector('.js-Todo-name');
     
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date-input');

    const dueDate = dateInputElement.value;

    TodoName.push({ 
        name,
        dueDate
}
);

    inputElement.value = '';

    OnhtmlTodo();
}