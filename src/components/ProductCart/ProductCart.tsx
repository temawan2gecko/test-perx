import React from "react";
import { Card, Button, Typography } from "antd";
import { Product } from "../../types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import styles from "./ProductCart.module.css";

const { Meta } = Card;
const { Text } = Typography;

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const imageUrl = product.image.startsWith("http")
    ? product.image
    : `https://test-frontend.dev.int.perx.ru${product.image}`;

  return (
    <Card
      hoverable
      className={styles.card}
      cover={
        <div className={styles.imageContainer}>
          <img alt={product.name} src={imageUrl} className={styles.image} />
        </div>
      }
    >
      <div className={styles.content}>
        <Meta title={<div className={styles.title}>{product.name}</div>} />

        <div className={styles.footer}>
          <Text strong className={styles.price}>
            {product.price} руб.
          </Text>
          <Button
            type="primary"
            block
            onClick={() => dispatch(addToCart(product))}
            className={styles.button}
          >
            Добавить в корзину
          </Button>
        </div>
      </div>
    </Card>
  );
};
