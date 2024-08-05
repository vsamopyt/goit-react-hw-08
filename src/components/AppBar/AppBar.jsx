import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.css';

export const AppBar = () => {

  const  isLoggedIn  = useSelector(selectIsLoggedIn);
  
  // const  isLoggedIn  = useSelector((state)=>state.auth.isLoginIn)
 

  // return (
  //   <header className={css.header}>
  //     <Navigation />
  //     {isLoggedIn ? <UserMenu /> : <AuthNav />}
  //   </header>
  // );

  return (
    <header className={css.header}>
      <div className={css.navigationWraper}>
      <Navigation />
      {!isLoggedIn && <AuthNav />}
      </div>
     <div>
     {isLoggedIn && <UserMenu /> }
     </div>
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );

};