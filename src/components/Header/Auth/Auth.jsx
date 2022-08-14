import style from './Auth.module.css';
import { ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = () => {
  console.log(style);
  return (
    <div>
      <LoginIcon className={style.login}/>
    </div>
  );
};
