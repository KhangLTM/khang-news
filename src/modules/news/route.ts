import type { RouteRecordRaw } from "vue-router";

import { AppRoute } from "@/constants";
import { transformAppRoutes } from "@/utils/routeTransForm";

const routes: RouteRecordRaw[] = transformAppRoutes(AppRoute.News, "news");

export default routes;
