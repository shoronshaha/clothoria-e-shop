import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminFeatures from "./pages/admin-view/features";
import AdminOrders from "./pages/admin-view/orders";
import AdminProducts from "./pages/admin-view/products";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "@/components/ui/skeleton";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  console.log(isLoading, user);
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* Auth route  */}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout></AuthLayout>
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin></AuthLogin>}></Route>
          <Route
            path="register"
            element={<AuthRegister></AuthRegister>}
          ></Route>
        </Route>
        {/* admin route */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout></AdminLayout>
            </CheckAuth>
          }
        >
          <Route
            path="dashboard"
            element={<AdminDashboard></AdminDashboard>}
          ></Route>
          <Route
            path="features"
            element={<AdminFeatures></AdminFeatures>}
          ></Route>
          <Route path="orders" element={<AdminOrders></AdminOrders>}></Route>
          <Route
            path="products"
            element={<AdminProducts></AdminProducts>}
          ></Route>
        </Route>
        {/* shopping layout */}
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout></ShoppingLayout>
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome></ShoppingHome>}></Route>
          <Route
            path="listing"
            element={<ShoppingListing></ShoppingListing>}
          ></Route>
          <Route
            path="checkout"
            element={<ShoppingCheckout></ShoppingCheckout>}
          ></Route>
          <Route
            path="account"
            element={<ShoppingAccount></ShoppingAccount>}
          ></Route>
        </Route>
        <Route path="/unauth-page" element={<UnauthPage></UnauthPage>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
