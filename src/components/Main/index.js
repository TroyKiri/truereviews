import Link from 'next/link';
import s from './Main.module.scss';

export default function Main() {
  return (
    <section className={s.main}>
      <div className={s.wrap}>
        <h1>LEOMAX.RU — интернет-магазин «Телевизионная Торговая Сеть» — отзывы</h1>
        <div className={s.recommendsWrap}>
          <div className={s.recommends}>
            <div className={s.stars}></div>
            <p className={s.text}>
              рекомендуют: <span>80%</span>
            </p>
          </div>
        </div>
        <Link className={s.logo} href="https://www.leomax.ru/" target="_blank">
          <img alt="Logo" src="/images/logo.png" />
        </Link>
        <div className={s.reviews}>
          <div className={s.chartWrap}></div>
          <button className={s.button}>добавить отзыв о компании</button>
          <button className={s.buttonSort}>все отзывы (160)</button>
        </div>
      </div>
    </section>
  );
}
