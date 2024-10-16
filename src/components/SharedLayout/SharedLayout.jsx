import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pageRefresh } from '../../redux/auth/operations';
import { Navigation } from 'components/Navigation/Navigation';
import { ThreeDots } from 'react-loader-spinner';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pageRefresh());
  }, [dispatch]);

  if (isRefreshing) {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}
      >
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="gray"
          ariaLabel="three-dots-loading"
        />
      </div>
    );
  }

  return (
    <div className={css.contentWrapper}>
      <header className={css.header}>
        <div className={css.container}>
          <Navigation />
        </div>
      </header>
      <main className={css.container}>
        <Outlet />
      </main>
    </div>
  );
};
