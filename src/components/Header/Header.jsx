import style from './Header.module.css';
import {Logo} from './Logo/Logo';
import {Auth} from './Auth/Auth';
import {Layout} from './../Main/Layout/Layout';


export const Header = () => (
  <header className={style.header}>
    <Layout>
      <Logo />
      <Auth/>
    </Layout>
  </header>
);
