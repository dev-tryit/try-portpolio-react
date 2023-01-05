import { Provider } from "react-redux";
import Portpolio2Page from "screens/pages/Portpolio2Page";
import { ReduxUtil } from "_commons/utils/ReduxUtil";

function App() {
  return <Portpolio2Page />;
}

const ProviderApp = () => {
  return (
    <Provider store={ReduxUtil.reduxStore}>
      <App />
    </Provider>
  );
};

export default ProviderApp;
