import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import IphoneContainer from "./pages/Iphone/IphoneContainer";
import IphoneDetails from "./pages/Iphone/IphoneDetails";
import PageNotFound from "./components/PageNotFound";
import Layout from "./pages/Layout/Layout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="iphone" element={<IphoneContainer />} />
          <Route path="iphone/:product_id" element={<IphoneDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}
