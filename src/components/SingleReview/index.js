import { useEffect, useRef } from 'react';
import ReviewCard from '../Reviews/ReviewCard';
import s from './SingleReview.module.scss';

export default function SingleReview({ review }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollIntoView({block: "start", behavior: "smooth"});
  }, []);

  return (
    <section className={s.main}>
      <div ref={ref} className={s.wrap}>
        {review && <ReviewCard single {...review} />}
        <div>
            <p>Это полезный отзыв?</p>
            <button>да</button>
            <button>нет</button>
        </div>
        <div>
            <h3>Комментарии к отзыву (2)</h3>
            <button>Оставить комментарий</button>
        </div>
        <div>
            <div>Комментарий</div>
            <div>Комментарий</div>
        </div>
      </div>
    </section>
  );
}
