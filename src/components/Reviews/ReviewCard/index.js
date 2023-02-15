import Link from 'next/link';
import s from './ReviewCard.module.scss';

export default function ReviewCard({ id, title, nameUser, date, dignity, flaws, text, single }) {
  return (
    <article className={s.card}>
      <figure className={s.figure}>
        <img src='/images/user_no_photo.png' alt="Фото пользователя" className={s.photo} />
        <figcaption className={s.caption}>{nameUser}</figcaption>
      </figure>
      <div className={s.wrap}>
        <h2>{title}</h2>
        <p className={s.date}>{date}</p>
        <div className={s.rating}></div>
        <div className={s.inner}>
          <h3 className={s.dignity}>достоинства:</h3>
          <p className={s.text}>{dignity}</p>
        </div>
        <div className={s.inner}>
          <h3 className={s.flaws}>недостатки:</h3>
          <p className={s.text}>{flaws}</p>
        </div>
        <div className={s.inner}>
          <h3>отзыв:</h3>
          <p className={s.text}>{text}</p>
        </div>
        {!single && <Link className={s.button} href={`/reviews/${id}`}>читать весь отзыв</Link>}
      </div>
    </article>
  );
}
