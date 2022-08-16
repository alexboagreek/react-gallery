import style from './Header.module.css';
import { Layout } from '../Layout/Layout';
import { Logo } from './Logo/Logo';
import { Auth } from './Auth/Auth';


export const Header = () => {
  console.log(style);
  return (
    <header className={style.header}>
         <Logo />
         <Auth/>
    </header>
  );
};
