import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './button';

function Home() {
  const username = useSelector(state => state.user.username);
  

  return (
    <div className="my-10  px-4 text-center sm:my-16">
      <h1 className="mb-8 text-center text-xl font-semibold tracking-tighter md:text-3xl">
        The supa pizza.
        <br />
        <span className="tracking-tighter text-amber-700">
          Straight to you.
        </span>
      </h1>
      {username === '' ? <CreateUser /> : <Button to='/menu' type='primary'>Continue ordering, {username }</Button> }
    </div>
  );
}

export default Home;
