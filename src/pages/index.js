import Head from 'next/head';

import CommonLayout from '@/components/CommonLayout';
import Main from '@/components/Main';
import Reviews from '@/components/Reviews';

import { reviews } from '@/common/reviews/reviews';
import { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import NewReviewForm from '@/components/Forms/NewReviewForm';
import Feedback from '@/components/Forms/Feedback';
import SingleReview from '@/components/SingleReview';
import NewCommentForm from '@/components/Forms/NewCommentForm';

export default function Home() {
  const [id, setId] = useState(null);
  const [review, setReview] = useState(null);
  const [rating, setRating] = useState(null);
  const [reviewsToDisplay, setReviewsToDisplay] = useState(reviews);

  const [modal, setModal] = useState(null);

  useEffect(() => {
    if (rating === null) {
      setReviewsToDisplay(reviews);
    } else {
      setReviewsToDisplay(reviews.filter((item) => item.ratings === rating));
    }
  }, [rating]);

  useEffect(() => {
    id ? setReview(reviews.find((item) => item.id == id)) : setReview(null);
    id &&
      setTimeout(() => {
        document.querySelector('#singleReview').scrollIntoView({ behavior: 'smooth' });
      }, 200);
  }, [id]);

  return (
    <>
      <Head>
        <title>Отзывы о Леомаксе - Правдивые отзывы</title>
        <meta name="description" content="Прочитайте правдивые отзывы о компании Леомакс. Узнайте что пишут другие пользователи и выбирайте хорошие компании." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonLayout setModal={setModal}>
        <main>
          <Main setRating={setRating} setModal={setModal} setId={setId} />
          {!review && <Reviews reviews={reviewsToDisplay} setId={setId} />}
          {review && <SingleReview review={review} setModal={setModal} />}
        </main>
      </CommonLayout>
      {modal && <Modal setModal={setModal}>{modal === 'newReview' ? <NewReviewForm /> : modal === 'feedback' ? <Feedback /> : <NewCommentForm setModal={setModal} />}</Modal>}
    </>
  );
}
