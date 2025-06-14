/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import type { CreateFileRoute, FileRoutesByPath } from '@tanstack/react-router'

import { Route as rootRouteImport } from './routes/__root'
import { Route as AboutRouteImport } from './routes/about'
import { Route as IndexRouteImport } from './routes/index'
import { Route as GlyphsGlyphNameRouteImport } from './routes/glyphs.$glyphName'

const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const GlyphsGlyphNameRoute = GlyphsGlyphNameRouteImport.update({
  id: '/glyphs/$glyphName',
  path: '/glyphs/$glyphName',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/glyphs/$glyphName': typeof GlyphsGlyphNameRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/glyphs/$glyphName': typeof GlyphsGlyphNameRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/glyphs/$glyphName': typeof GlyphsGlyphNameRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/glyphs/$glyphName'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/glyphs/$glyphName'
  id: '__root__' | '/' | '/about' | '/glyphs/$glyphName'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  GlyphsGlyphNameRoute: typeof GlyphsGlyphNameRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/glyphs/$glyphName': {
      id: '/glyphs/$glyphName'
      path: '/glyphs/$glyphName'
      fullPath: '/glyphs/$glyphName'
      preLoaderRoute: typeof GlyphsGlyphNameRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

declare module './routes/index' {
  const createFileRoute: CreateFileRoute<
    '/',
    FileRoutesByPath['/']['parentRoute'],
    FileRoutesByPath['/']['id'],
    FileRoutesByPath['/']['path'],
    FileRoutesByPath['/']['fullPath']
  >
}
declare module './routes/about' {
  const createFileRoute: CreateFileRoute<
    '/about',
    FileRoutesByPath['/about']['parentRoute'],
    FileRoutesByPath['/about']['id'],
    FileRoutesByPath['/about']['path'],
    FileRoutesByPath['/about']['fullPath']
  >
}
declare module './routes/glyphs.$glyphName' {
  const createFileRoute: CreateFileRoute<
    '/glyphs/$glyphName',
    FileRoutesByPath['/glyphs/$glyphName']['parentRoute'],
    FileRoutesByPath['/glyphs/$glyphName']['id'],
    FileRoutesByPath['/glyphs/$glyphName']['path'],
    FileRoutesByPath['/glyphs/$glyphName']['fullPath']
  >
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  GlyphsGlyphNameRoute: GlyphsGlyphNameRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
