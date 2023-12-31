import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:p-6 md:text-base flex items-center justify-between">
      <p className="space-x-3 font-semibold text-stone-300 sm:space-x-6 ">
        <span >23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/Cart" >Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
