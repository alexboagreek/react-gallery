import style from './Main.module.css';
import List from './List';
import Layout from './Layout';
import SinglePhoto from './SinglePhoto';
import {Routes, Route} from 'react-router-dom';

export const Main = () => (
  <main className={style.main}>
    <div className={style.container}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<List />} />
          <Route path='photos/:id' element={<SinglePhoto />} />
        </Route>
      </Routes>
    </div>
  </main>
);

