import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";
import store from "./src/redux/storeHandler";

export default function App() {
  const [loaded] = useFonts({
    EuBold: require("./assets/fonts/Euclid-Circular-Bold.ttf"),
    EuMedium: require("./assets/fonts/Euclid-Circular-Medium.ttf"),
    EuRegular: require("./assets/fonts/Euclid-Circular-Regular.ttf"),
    EuLight: require("./assets/fonts/Euclid-Circular-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
