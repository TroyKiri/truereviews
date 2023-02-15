import ReviewCard from './ReviewCard';

import { reviews } from '@/common/reviews/reviews';

import s from './Reviews.module.scss';

export default function Reviews() {
  return (
    <section className={s.main}>
      <div className={s.wrap}>
        <p className={s.summary}>Отзывы ({reviews.length})</p>
        {reviews.length &&
          reviews.map((item) => (
            <ReviewCard key={item.id} {...item} />
          ))}
      </div>
    </section>
  );
}
