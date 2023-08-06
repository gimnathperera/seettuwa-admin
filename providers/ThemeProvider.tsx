'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

export interface NextUIThemeProviderProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function NextUIThemeProvider({
  children,
  themeProps,
}: NextUIThemeProviderProps): JSX.Element {
  return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
