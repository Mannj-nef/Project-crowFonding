import { lazy } from "react";
const SignUp = lazy(() => import("../pages/SignUp"));
const SignIn = lazy(() => import("../pages/SignIn"));
const Home = lazy(() => import("../pages/HomePage"));
const Campaign = lazy(() => import("../pages/CampaignPage"));
const Payment = lazy(() => import("../pages/PaymentPage"));
const PageNotFount = lazy(() => import("../pages/PageNotFount"));
const EmailVerification = lazy(() => import("../modules/sign-up"));
const ForgotPassword = lazy(() => import("../modules/sign-in"));
const DashboardLayout = lazy(() => import("../layouts/DashboardLayout"));
const CheckOutLayout = lazy(() => import("../layouts/CheckOutLayout"));
const CategoryPage = lazy(() => import("../pages/CategoryPage"));
const CampaignCreate = lazy(() => import("../pages/CampaignAddNewPage"));
const CheackoutPage = lazy(() => import("../pages/CheackoutPage"));
const ShippingPage = lazy(() => import("../pages/ShippingPage"));
const CampaignView = lazy(() =>
  import("../modules/campaign/CampaignViewDetail")
);
const widthDraw = lazy(() => import("../pages/Withdrawpage"));

const ROUTER_PATCH = {
  HOME: {
    name: "Dashboard",
    path: "/",
  },
  CATEGORY: {
    name: "category",
    path: "/category/:slug",
  },
  SIGN_UP: {
    name: "sign up",
    path: "/sign-up",
  },
  SIGN_IN: {
    name: "sign in",
    path: "/sign-in",
  },
  CHECK_OUT: {
    name: "check out",
    path: "/checkout",
  },
  SHIPPING: {
    name: "shipping",
    path: "/shipping",
  },
  FORGOT_PASSWORD: {
    name: "forgot password",
    path: "/forgot-password",
  },
  EMAIL_VERIFICATION: {
    name: "verification",
    path: "/verification",
  },
  CAMPAIGN: {
    name: "Campaign",
    path: "/campaign",
  },
  CAMPAIGN_ADD_NEW: {
    name: "Campaign add new",
    path: "/campaign-create",
  },
  CAMPAIGN_VIEW: {
    name: "Campaign view",
    path: "/campaign/:slug",
  },
  WITHDRAW: {
    name: "Withdraw",
    path: "/withdraw",
  },
  PAYMENT: {
    name: "Payment",
    path: "/payment",
  },
  PROFILE: {
    name: "Profile",
    path: "/profile",
  },
  PAGE_NOT_FOUNT: {
    name: "page not pount",
    path: "*",
  },
};

const ROUTER = [
  {
    path: ROUTER_PATCH.HOME.path,
    component: Home,
    layout: DashboardLayout,
  },
  {
    path: ROUTER_PATCH.CATEGORY.path,
    component: CategoryPage,
    layout: DashboardLayout,
  },
  {
    path: ROUTER_PATCH.CAMPAIGN.path,
    component: Campaign,
    layout: DashboardLayout,
  },
  {
    path: ROUTER_PATCH.CAMPAIGN_ADD_NEW.path,
    component: CampaignCreate,
    layout: DashboardLayout,
  },
  {
    path: ROUTER_PATCH.CAMPAIGN_VIEW.path,
    component: CampaignView,
    layout: DashboardLayout,
  },
  {
    path: ROUTER_PATCH.PAYMENT.path,
    component: Payment,
    layout: DashboardLayout,
  },
  {
    path: ROUTER_PATCH.CHECK_OUT.path,
    component: CheackoutPage,
    layout: CheckOutLayout,
  },
  {
    path: ROUTER_PATCH.SHIPPING.path,
    component: ShippingPage,
    layout: CheckOutLayout,
  },
  {
    path: ROUTER_PATCH.WITHDRAW.path,
    component: widthDraw,
    layout: DashboardLayout,
  },

  // not layout
  {
    path: ROUTER_PATCH.SIGN_UP.path,
    component: SignUp,
  },
  {
    path: ROUTER_PATCH.SIGN_IN.path,
    component: SignIn,
  },
  {
    path: ROUTER_PATCH.EMAIL_VERIFICATION.path,
    component: EmailVerification,
  },
  {
    path: ROUTER_PATCH.FORGOT_PASSWORD.path,
    component: ForgotPassword,
  },
  {
    path: ROUTER_PATCH.PAGE_NOT_FOUNT.path,
    component: PageNotFount,
  },
];

export { ROUTER_PATCH };
export default ROUTER;
