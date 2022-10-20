import { Header } from './components/Header'
import { TodoList } from './components/TodoList'
import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.css'
import { NoResult } from './components/NoResult';

interface ITodo {
  id: string;
  content: string;
  checked: boolean;
}

function App() {

  const [todosList, setTodosList] = useState(Array<ITodo>)

  const [newTodo, setNewTodo] = useState('')

  const countAllTodo = todosList.length

  const todosListEmpty = !todosList.length

  const checkedTodo = todosList.reduce((checked, todo) => {
    return checked + Number(todo.checked)
  }, 0);

  function handleCreateTodo(event: FormEvent) {
    event.preventDefault()

    setTodosList([...todosList, {
      id: uuidv4(),
      content: newTodo,
      checked: false,
    }])

    setNewTodo('')
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event?.target.value);

  }

  function changeCheckedTodo(id: string) {
    const todoListWithChangeChecked = todosList.map(todo => {
      if (todo.id === id) {
        todo.checked = !todo.checked
        return todo
      }

      return todo
    }).sort((a, b) => Number(a.checked) < Number(b.checked) ? - 1 : Number(a.checked) > Number(b.checked) ? 1 : 0);

    setTodosList(todoListWithChangeChecked)
  }

  function deleteTodo(id: string) {
    const todoListWithoutTheDeleted = todosList.filter((todo) => {
      return todo.id !== id
    });

    setTodosList(todoListWithoutTheDeleted)
  }


  return (
    <div>
      <Header />

      <main>
        <form onSubmit={handleCreateTodo} className={styles.form}>
          <input type="text" placeholder='Adicione uma nova tarefa' value={newTodo} onChange={handleNewTodoChange} required />

          <button type='submit'>
            Criar
            <PlusCircle size={20} />
          </button>

        </form>

        <div className={styles.todolistWrapper}>
          <header className={styles.header}>
            <strong className={styles.colorBlue}>Tarefas criadas  <span className={styles.styleCounter}> {countAllTodo} </span> </strong>

            <strong className={styles.colorPurple}>Concluídas  <span className={styles.styleCounterFinished}> {checkedTodo} de {countAllTodo}</span> </strong>
          </header>

          {todosListEmpty ?
            <NoResult /> :
            todosList.map(todoList => <TodoList key={todoList.id} todo={todoList} onChangeChecked={changeCheckedTodo} onDeleteTodo={deleteTodo} />)
          }
        </div>
      </main>
    </div>
  )
}

export default App
