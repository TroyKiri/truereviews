import s from './Comment.module.scss';

export default function Comment() {
  return (
    <article className={s.comment}>
      <div className={s.wrap}>
        <img className={s.img} alt="Фото" src="/images/comment_photo.png" />
        <div className={s.inner}>
          <h3 className={s.name}>LanaBanana</h3>
          <p className={s.date}>24.08.2020</p>
          <p className={s.text}>Спасибо за информацию, не знала об этом магазине - теперь обязательно попробую что-то заказать там.</p>
          <button className={s.button}>
            <span>ответить</span>
          </button>
        </div>
      </div>

      <div className={s.response}>
        <img className={s.photo} alt="Фото" src="/images/comment_no_photo.png"/>
        <div className={s.wrapper}>
          <span>Вы отвечаете на комментарий:</span>
          <textarea className={s.textarea}></textarea>
          <div className={s.buttons}>
            <button className={`${s.button} ${s.buttonCancel}`}>отмена</button>
            <button className={`${s.button} ${s.buttonSend}`}>отправить</button>
          </div>
        </div>
      </div>
    </article>
  );
}
