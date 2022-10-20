import styles from './NoResult.module.css'

import { ClipboardText } from 'phosphor-react'

export function NoResult() {
    return (
        <>
            <hr className={styles.dividerLine}></hr>

            <div className={styles.noResults}>
                <ClipboardText size={56} weight="thin" color='#262626' />
                <strong> Você ainda não tem tarefas cadastradas</strong>
                <span> Crie tarefas e organize seus itens a fazer</span>
            </div>
        </>
    )

}