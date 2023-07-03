import {
  IconCampaign,
  IconDashboard,
  IconPayment,
  IconWithdraw,
  IconProfile,
  IconLogout,
  IconDarkMode,
} from "../../../components/Icons";
import { ROUTER_PATCH } from "../../../routers";

const NAVBAR_LINK = [
  {
    title: ROUTER_PATCH.HOME.name,
    icon: <IconDashboard />,
    to: ROUTER_PATCH.HOME.path,
  },
  {
    title: ROUTER_PATCH.CAMPAIGN.name,
    icon: <IconCampaign />,
    to: ROUTER_PATCH.CAMPAIGN.path,
  },
  {
    title: ROUTER_PATCH.PAYMENT.name,
    icon: <IconPayment />,
    to: ROUTER_PATCH.PAYMENT.path,
  },
  {
    title: ROUTER_PATCH.WITHDRAW.name,
    icon: <IconWithdraw />,
    to: ROUTER_PATCH.WITHDRAW.path,
  },
  {
    title: ROUTER_PATCH.PROFILE.name,
    icon: <IconProfile />,
    to: ROUTER_PATCH.PROFILE.path,
  },
];

const LOG_OUT = {
  title: "Logout",
  icon: <IconLogout />,
  onClick: () => {},
};

const DARK_MODE = {
  title: "Light/Dark",
  icon: <IconDarkMode />,
  onClick: () => {
    document.documentElement.classList.toggle("dark");
  },
};

export { DARK_MODE, LOG_OUT };
export default NAVBAR_LINK;
