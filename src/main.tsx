import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

interface AppConfig {
  dealers?: string[];
}

const renderApp = (config?: AppConfig) => {
  createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
      <App config={config} />
    </Provider>
  );
};

declare global {
  interface Window {
    App: {
      start: (config?: AppConfig) => void;
    };
  }
}

window.App = {
  start: (config?: AppConfig) => renderApp(config),
};

// В массив dealers нужно передавать дилеров
/*
Должна иметься возможность в коде инициализации приложения указать список идентификаторов дилеров, 
товары которых будут подгружаться в интернет-магазин. Если список дилеров не указан, 
должны подгружаться товары всех дилеров.
*/
window.App.start({ dealers: ["0c4aab30", "86e64a33"] });
