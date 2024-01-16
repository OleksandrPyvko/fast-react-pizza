import { useDispatch } from 'react-redux';
import Button from '../../ui/button';
import { deleteItem } from './cartSlice';

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}
