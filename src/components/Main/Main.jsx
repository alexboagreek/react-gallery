import style from './Main.module.css';

export const Main = () => {
  console.log(style);
  return (
    <main className={style.main}>
      Main component
    </main>
  );
};
