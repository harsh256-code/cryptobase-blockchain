import { ThirdwebSDK } from "@3rdweb/sdk";
import { ThirdwebProvider } from "@3rdweb/react";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "../styles/globals.css";
const supportedChainIds = [4];
const connectors = {
  injected: {},
};
function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
