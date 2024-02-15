import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nProvider } from '@razorpay/i18nify-react';

import App from './app';
import { IntlOptionsProvider } from './context/intlOptionsContext';
import ErrorBoundary from './components/errorBoundary';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ErrorBoundary>
    <I18nProvider>
      <IntlOptionsProvider>
        <HelmetProvider>
          <BrowserRouter basename="/i18nify-playground">
            <Suspense>
              <App />
            </Suspense>
          </BrowserRouter>
        </HelmetProvider>
      </IntlOptionsProvider>
    </I18nProvider>
  </ErrorBoundary>
);
