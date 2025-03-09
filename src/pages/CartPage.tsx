import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Button, Typography } from "antd";
import { CartItem } from "../components/CartItem/CartItem";
import { RootState } from "../store";
import { clearCart } from "../store/slices/cartSlice";

export const CartPage: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = Object.values(items).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <Typography.Title level={2}>Корзина</Typography.Title>
      <List
        dataSource={Object.values(items)}
        renderItem={(item) => <CartItem key={item.name} item={item} />}
      />
      <div style={{ marginTop: 20 }}>
        <Typography.Text strong>
          Общая стоимость: {total.toFixed(2)} руб.
        </Typography.Text>
      </div>
      <Button
        type="primary"
        danger
        onClick={() => dispatch(clearCart())}
        style={{ marginTop: 20 }}
      >
        Очистить корзину
      </Button>
    </div>
  );
};
