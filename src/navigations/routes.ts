import { Home, LandingPage, Password, WalletAdapter } from "../pages";

export interface RouteInterace {
    path: string;
    component: React.ComponentType;
  }

export const routes: RouteInterace[] = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/password",
    component: Password,
  },
  {
    path: "/seed",
    component: Password,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/importWallet",
    component: WalletAdapter,
  },
];
