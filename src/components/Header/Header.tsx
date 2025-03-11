import React from "react";
import { Link } from "react-router-dom";
import { Layout, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalCount = Object.values(items).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <Layout.Header className={styles.header}>
      <Link to="/test-perx/" className={styles.logo}>
        Perx Store
      </Link>

      <Link to="/cart" className={styles.cart}>
        <Badge count={totalCount} size="small" className={styles.badge}>
          <ShoppingCartOutlined className={styles.icon} />
        </Badge>
      </Link>
    </Layout.Header>
  );
};
