import React from 'react'
import css from './account.module.css'

export default function Account() {

  return (
    <div className={css.account_container}>
      <div className={css.account_container_item}>
        <div className={css.left_column}>
          <div className={css.left_item}>
            ФОТО и ин-фо о человеке
          </div>
        </div>
        <div className={css.container_right_items}>
          <div className={css.right_item}>
                Активные записи
          </div>
          <div className={css.right_item}>
                Архив приемов и вся инфа о них
          </div>
        </div>
      </div>
    </div>
  )
}
