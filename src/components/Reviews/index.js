import s from './Reviews.module.scss';
import ReviewCard from './ReviewCard';

export default function Reviews() {
  return (
    <section className={s.main}>
      <div className={s.wrap}>
        <p className={s.summary}>Отзывы (100)</p>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
  );
}
