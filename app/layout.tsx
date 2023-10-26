'use client';

import { baselightTheme } from '@/utils/theme/DefaultColors';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider theme={baselightTheme}>
          <CssBaseline />
          <LocalizationProvider dateAdapter={AdapterDateFns}>{children}</LocalizationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
