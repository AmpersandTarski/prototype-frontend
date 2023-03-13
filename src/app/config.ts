import { InjectionToken } from '@angular/core';
import { InterfaceName } from './shared/interfacing/navbar.interface';

export const INTERFACE_ROUTE_MAPPING_TOKEN = new InjectionToken<InterfaceRouteMap>(
  'Configuration to match interface names with angular routes',
);

type RoutePath = string;

export type InterfaceRouteMap = Record<InterfaceName, RoutePath | undefined>;
