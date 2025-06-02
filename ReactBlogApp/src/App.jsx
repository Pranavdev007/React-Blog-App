import { useEffect, useState } from "react";
import { Footer, Header } from "./Components";
import store from "./store/store";
import { Provider, useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    authService
      .getCurrentUser()
      .then(({ userData }) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="bg-gray-400">
      <Provider store={store}>
        <Header />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
