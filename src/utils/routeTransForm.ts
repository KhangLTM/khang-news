// Define the layout type
type LayoutType = "default" | "news"; // Add other layout types as needed

// Define the meta type
interface RouteMeta {
  layout: LayoutType;
}

// Define the route type
interface AppRoute {
  name: string;
  path: string;
  component: string;
  meta: RouteMeta;
  children?: AppRoute[];
}

export function transformRoutes(
  routeObj: AppRoute,
  moduleName: string,
  basePath = "",
): RouteRecordRaw[] {
  const fullPath = basePath + routeObj.path;
  const routeRecord: RouteRecordRaw = {
    name: routeObj.name,
    path: fullPath,
    component: () =>
      import(`@/modules/${moduleName}/pages/${routeObj.component}.vue`),
    meta: routeObj.meta,
  };

  if (routeObj.children && routeObj.children.length > 0) {
    routeRecord.children = routeObj.children.flatMap((child) =>
      transformRoutes(child, moduleName, fullPath),
    );
  }

  return [routeRecord];
}

export function transformAppRoutes(
  appRoutes: { [key: string]: AppRoute },
  moduleName: string,
): RouteRecordRaw[] {
  return Object.values(appRoutes).flatMap((route) =>
    transformRoutes(route, moduleName),
  );
}
