import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const getCurrentQuantity = useSelector(getCurrentQuantityById(id));

  function haneleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    // if (pizzaIds.includes(id)) dispatch(increaseItemQuantity(id));
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 rounded-sm ${soldOut && "opacity-70 grayscale"}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="text-lg font-semibold tracking-wider">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-semibold uppercase text-stone-500">Sold out</p>
          )}

          {!soldOut && getCurrentQuantity > 0 && (
            <>
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={getCurrentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </>
          )}

          {!soldOut && getCurrentQuantity === 0 && (
            <Button type="small" onClick={haneleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
