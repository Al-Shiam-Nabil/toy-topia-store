import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ForgetPasswordPage from "../Pages/ForgetPasswordPage";
import PrivateRoutes from "../Context/PrivateRoutes";
import ToyDetails from "../Pages/ToyDetails";
import MyProfile from "../Pages/MyProfile";
import ErrorPage from "../Pages/ErrorPage";
import ShippingDeliveyPage from "../Pages/ShippingDeliveyPage";
import TermsConditionPage from "../Pages/TermsConditionPage";
import PrivacyPolicyPage from "../Pages/PrivacyPolicyPage";
import HomePageLayout from "../Layouts/HomePageLayout";
import LoadingPage from "../Components/Loading/LoadingPage";

export const router = createBrowserRouter([
    {
        hydrateFallbackElement:<LoadingPage></LoadingPage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/",
    Component: HomePageLayout,
  // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "log-in",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "forget-password",
        Component: ForgetPasswordPage,
      },
      {
        path: "toy-details/:id",
        element: (
          <PrivateRoutes>
            <ToyDetails></ToyDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "shipping-delivery",
        element: (
          <PrivateRoutes>
            <ShippingDeliveyPage></ShippingDeliveyPage>
          </PrivateRoutes>
        ),
      },
      {
        path: "terms-conditions",
        Component: TermsConditionPage,
      },
      {
        path: "privacy-policy",
        Component: PrivacyPolicyPage,
      },
    ],
    
  },

]);
