import React from "react";
import { Row, Col, Spin, Alert } from "antd";
import { ProductCard } from "../components/ProductCart/ProductCart";
import { useFetchGoodsQuery } from "../services/goodsApi";

interface ProductsPageProps {
  dealers?: string[];
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ dealers }) => {
  const dealersParam = dealers ? dealers.join(",") : undefined;
  const { data, error, isLoading } = useFetchGoodsQuery(dealersParam);
  console.log({ isLoading, error, data });
  if (isLoading) return <Spin />;
  if (error) return <Alert message="Ошибка загрузки товаров" type="error" />;

  return (
    <Row style={{ gap: "10px", justifyContent: "center", padding: "20px" }}>
      {data?.map((product) => (
        <Col key={product.name} xs={24} sm={12} md={8} lg={4}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};
