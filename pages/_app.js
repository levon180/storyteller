import React from "react";
import {ConfigProvider} from "antd";
import "styles/globals.css";

const App = ({Component, pageProps}) => {
  const getLayout = (Component.getLayout);
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#1DB56C',
            colorPrimaryHover: '#1DB56C',
            colorPrimaryActive: '#1DB56C',
          },
        },
        token: {
          // Seed Token
          colorPrimary: '#1C62EB',
          colorSuccess: '#1DB56C',
          colorTextBase: '#171A25BF',
          colorError: '#D24747',
          borderRadius: 3,

          // Alias Token
          colorBgContainer: '#F9F9F9',
        },
      }}
    >
      {getLayout(<Component {...pageProps} />)}
    </ConfigProvider>
  );
};

export default App;
