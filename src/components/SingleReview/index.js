import { useEffect, useRef } from 'react';
import ReviewCard from '../Reviews/ReviewCard';
import Comment from '../Comment';
import s from './SingleReview.module.scss';

export default function SingleReview({ review }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }, []);

  return (
    <section className={s.main}>
      <div ref={ref} className={s.wrap}>
        {review && <ReviewCard single {...review} />}
        <div className={s.grade}>
          <p className={s.text}>Это полезный отзыв?</p>
          <div className={s.buttons}>
            <button className={`${s.button} ${s.buttonYes}`}>
              <span>да</span>
            </button>
            <button className={`${s.button} ${s.buttonNo}`}>
              <span>нет</span>
            </button>
          </div>
        </div>
        <div className={s.comments}>
          <h3 className={s.title}>Комментарии к отзыву (2)</h3>
          <button className={s.button}>Оставить комментарий</button>
        </div>
        <div>
          <Comment />
        </div>
      </div>
    </section>
  );
}
