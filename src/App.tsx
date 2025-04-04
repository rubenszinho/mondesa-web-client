import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense } from 'react';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import routes from './routes';

const Loading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }}>
    Loading...
  </div>
);

const AppRoutes = () => {
  const routeElements = useRoutes(routes);
  return routeElements;
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Suspense fallback={<Loading />}>
            <AppRoutes />
          </Suspense>
          <Footer />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;