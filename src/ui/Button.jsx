import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick, }) {
  // const className =
  //   'rounded-xl bg-amber-500 px-6 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-amber-400 focus:bg-amber-300 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-300';

  const base = `text-sm rounded-xl bg-amber-500  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-amber-400 focus:bg-amber-300 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-300`;

  const styles = {
    primary: base + ' px-6 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' py-1 px-2 md:px3 md:py3 rounded-full text-sm',
    secondary:
      'text-sm rounded-xl border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:text-stone-100 focus:text-stone-100 hover:bg-stone-800 focus:bg-stone-500 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-300 px-4 py-2.5 md:px-4.5 md:py-2.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
