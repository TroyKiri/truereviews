import Link from 'next/link';

import s from './Header.module.scss';

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.wrap}>
        <Link href="/">
          <p className={s.title}>Правдивые отзывы.ру</p>
        </Link>
        <button className={s.button}>написать новый отзыв</button>
      </div>
    </header>
  );
}
