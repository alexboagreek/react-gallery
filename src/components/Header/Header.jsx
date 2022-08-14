import style from './Header.module.css';
import { Layout } from '../Layout/Layout';
import { Auth } from './Auth/Auth';
import { ReactComponent as LogoIcon} from './img/logo.svg';

export const Header = () => {
  console.log(style);
  return (
    <header className={style.header}>
         <LogoIcon className={style.logo} />
         <Auth/>
    </header>
  );
};
