import { useState } from 'react';
import Head from 'next/head';

import CommonLayout from '@/components/CommonLayout';
import Rules from '@/components/Rules';
import Modal from '@/components/Modal';
import NewReviewForm from '@/components/Forms/NewReviewForm';
import Feedback from '@/components/Forms/Feedback';

export default function RulesSection() {
  const [modal, setModal] = useState(null);
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
          <Rules />
        </main>
      </CommonLayout>
      {modal && <Modal setModal={setModal}>{modal === 'newReview' ? <NewReviewForm /> : modal === 'feedback' ? <Feedback /> : <h1>Комментарий</h1>}</Modal>}
    </>
  );
}
