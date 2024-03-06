/* eslint-disable */

/* prettier-ignore */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PurchaseImport } from './routes/purchase'
import { Route as IndexImport } from './routes/index'
import { Route as PurchaseIndexImport } from './routes/purchase/index'
import { Route as PurchaseTransitionalImport } from './routes/purchase/transitional'
import { Route as PurchaseSuccessImport } from './routes/purchase/success'
import { Route as PurchaseSignUpImport } from './routes/purchase/sign-up'
import { Route as PurchaseLogInImport } from './routes/purchase/log-in'
import { Route as PurchaseLoadImport } from './routes/purchase/load'
import { Route as PurchaseConfirmImport } from './routes/purchase/confirm'
import { Route as PurchaseCardSelectImport } from './routes/purchase/card-select'
import { Route as PurchaseAddCardImport } from './routes/purchase/add-card'

// Create/Update Routes

const PurchaseRoute = PurchaseImport.update({
  path: '/purchase',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PurchaseIndexRoute = PurchaseIndexImport.update({
  path: '/',
  getParentRoute: () => PurchaseRoute,
} as any)

const PurchaseTransitionalRoute = PurchaseTransitionalImport.update({
  path: '/transitional',
  getParentRoute: () => PurchaseRoute,
} as any)

const PurchaseSuccessRoute = PurchaseSuccessImport.update({
  path: '/success',
  getParentRoute: () => PurchaseRoute,
} as any)

const PurchaseSignUpRoute = PurchaseSignUpImport.update({
  path: '/sign-up',
  getParentRoute: () => PurchaseRoute,
} as any)

const PurchaseLogInRoute = PurchaseLogInImport.update({
  path: '/log-in',
  getParentRoute: () => PurchaseRoute,
} as any)

const PurchaseLoadRoute = PurchaseLoadImport.update({
  path: '/load',
  getParentRoute: () => PurchaseRoute,
} as any)

const PurchaseConfirmRoute = PurchaseConfirmImport.update({
  path: '/confirm',
  getParentRoute: () => PurchaseRoute,
} as any)

const PurchaseCardSelectRoute = PurchaseCardSelectImport.update({
  path: '/card-select',
  getParentRoute: () => PurchaseRoute,
} as any)

const PurchaseAddCardRoute = PurchaseAddCardImport.update({
  path: '/add-card',
  getParentRoute: () => PurchaseRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/purchase': {
      preLoaderRoute: typeof PurchaseImport
      parentRoute: typeof rootRoute
    }
    '/purchase/add-card': {
      preLoaderRoute: typeof PurchaseAddCardImport
      parentRoute: typeof PurchaseImport
    }
    '/purchase/card-select': {
      preLoaderRoute: typeof PurchaseCardSelectImport
      parentRoute: typeof PurchaseImport
    }
    '/purchase/confirm': {
      preLoaderRoute: typeof PurchaseConfirmImport
      parentRoute: typeof PurchaseImport
    }
    '/purchase/load': {
      preLoaderRoute: typeof PurchaseLoadImport
      parentRoute: typeof PurchaseImport
    }
    '/purchase/log-in': {
      preLoaderRoute: typeof PurchaseLogInImport
      parentRoute: typeof PurchaseImport
    }
    '/purchase/sign-up': {
      preLoaderRoute: typeof PurchaseSignUpImport
      parentRoute: typeof PurchaseImport
    }
    '/purchase/success': {
      preLoaderRoute: typeof PurchaseSuccessImport
      parentRoute: typeof PurchaseImport
    }
    '/purchase/transitional': {
      preLoaderRoute: typeof PurchaseTransitionalImport
      parentRoute: typeof PurchaseImport
    }
    '/purchase/': {
      preLoaderRoute: typeof PurchaseIndexImport
      parentRoute: typeof PurchaseImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  PurchaseRoute.addChildren([
    PurchaseAddCardRoute,
    PurchaseCardSelectRoute,
    PurchaseConfirmRoute,
    PurchaseLoadRoute,
    PurchaseLogInRoute,
    PurchaseSignUpRoute,
    PurchaseSuccessRoute,
    PurchaseTransitionalRoute,
    PurchaseIndexRoute,
  ]),
])
