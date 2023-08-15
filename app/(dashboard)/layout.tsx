'use client';
import React, { useState } from 'react';
import { styled, Container, Box } from '@mui/material';
import { Footer, Header, Sidebar } from '@/components';

const MainWrapper = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
}));

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  zIndex: 1,
  backgroundColor: '#f4f7f9',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  maxWidth: '90% !important',
}));

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props): JSX.Element {
  // const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <MainWrapper>
      <Sidebar
        isSidebarOpen={true}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={(): void => setMobileSidebarOpen(false)}
      />

      <PageWrapper>
        <Header toggleMobileSidebar={(): void => setMobileSidebarOpen(true)} />

        <StyledContainer>
          <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>{children}</Box>
        </StyledContainer>
        <Footer />
      </PageWrapper>
    </MainWrapper>
  );
}
