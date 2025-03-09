import React from "react";
import { List, InputNumber, Button } from "antd";
import { CartItem as CartItemType } from "../../types";
import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../../store/slices/cartSlice";

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const imageUrl = item.image.startsWith("http")
    ? item.image
    : `https://test-frontend.dev.int.perx.ru${item.image}`;

  return (
    <List.Item
      actions={[
        <Button danger onClick={() => dispatch(removeFromCart(item.name))}>
          Удалить
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<img src={imageUrl} alt={item.name} width={80} />}
        title={item.name}
        description={`Цена: ${item.price} руб. × ${item.quantity}`}
      />
      <InputNumber
        min={1}
        value={item.quantity}
        onChange={(value) =>
          dispatch(updateQuantity({ key: item.name, quantity: Number(value) }))
        }
      />
    </List.Item>
  );
};
