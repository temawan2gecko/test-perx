import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ProductsPage } from "./pages/ProductsPage";
import { CartPage } from "./pages/CartPage";
import { useLocalStorageSync } from "./hooks/useLocalStorage";

interface AppProps {
  config?: { dealers?: string[] };
}

const App: React.FC<AppProps> = ({ config }) => {
  useLocalStorageSync();

  return (
    <Router>
      <Header />
      <Layout.Content>
        <Routes>
          <Route
            path="/test-perx/"
            element={<ProductsPage dealers={config?.dealers} />}
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Layout.Content>
    </Router>
  );
};

export default App;
