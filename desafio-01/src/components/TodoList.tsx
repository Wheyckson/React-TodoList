import styles from './TodoList.module.css'
import { Trash } from 'phosphor-react'

interface ITodoProps {
    todo: {
        id: string;
        content: string;
        checked: boolean;
    };
    onDeleteTodo: (id: string) => void;
    onChangeChecked: (id: string) => void;
}

export function TodoList({ todo, onDeleteTodo, onChangeChecked }: ITodoProps) {

    function handleChangeChecked() {
        onChangeChecked(todo.id)
    }

    function handleDeleteTodo() {
        onDeleteTodo(todo.id)
    }

    return (
        <div className={styles.contentWrapper}>
            <main className={styles.todoListContentWrapper}>
                <div className={styles.todoWrapper}>
                    <input type="checkbox" onClick={handleChangeChecked} />

                    <div className={styles.infoTodo} >
                        <span className={todo.checked ? styles.stringTextLine : ''}> {todo.content}</span>
                        <button onClick={handleDeleteTodo}>
                            <Trash size={20} />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}