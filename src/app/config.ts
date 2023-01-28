import { InjectionToken } from '@angular/core';

export const INTERFACE_ROUTE_MAPPING_TOKEN = new InjectionToken<InterfaceRouteMap>(
  'Configuration to match interface names with angular routes',
);

type InterfaceName = string;
type RoutePath = string;

export type InterfaceRouteMap = Record<InterfaceName, RoutePath | undefined>;
