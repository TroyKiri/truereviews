import s from './ReviewCard.module.scss';

export default function ReviewCard() {
  return (
    <article className={s.card}>
      <figure className={s.figure}>
        <img src="/images/user_no_photo.png" alt="Фото пользователя" className={s.photo} />
        <figcaption className={s.caption}>UserName</figcaption>
      </figure>
      <div className={s.wrap}>
        <h2>Знаю этот магазин с 2015 года, по качеству никогда не подводили!</h2>
        <p className={s.date}>07.07.2022</p>
        <div className={s.rating}></div>
        <div className={s.inner}>
          <h3 className={s.dignity}>достоинства:</h3>
          <p className={s.text}>Качественная одежда для женщин, хороший сервис, можно оформить заказ по телефону, бонусы за &quot;друзей&quot;</p>
        </div>
        <div className={s.inner}>
          <h3 className={s.flaws}>недостатки:</h3>
          <p className={s.text}>Бывает задерживают с доставкой, если не в МСК и области - на следующий день заказ вы не получите.</p>
        </div>
        <div className={s.inner}>
          <h3>отзыв:</h3>
          <p className={s.text}>
            Я этот магазин давно знаю, раньше мы тут с сестрой и мамой вместе заказывали одежду, но сейчас я переехала в другой город и продолжаю заказывать уже сама. Выбор одежды тут классный,
            представлены бренды, которые шьют...
          </p>
        </div>
        <button className={s.button}>читать весь отзыв</button>
      </div>
    </article>
  );
}
