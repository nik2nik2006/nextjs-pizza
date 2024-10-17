import {Ingredient} from "@prisma/client";
import {mapPizzaType, PizzaSize, PizzaType} from "@/shared/constants/pizza";

interface Props {
  name: string;
  pizzaSize?: PizzaSize;
  type?: PizzaType;
  ingredients?: Ingredient[];
}

export const CartItemInfo: React.FC<Props> = ({ name, pizzaSize, type, ingredients }) => {

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      </div>
      {details.length > 0 && <p className="text-xs text-gray-400">{details.join(', ')}</p>}
    </div>
  );
};
