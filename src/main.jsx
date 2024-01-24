import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nProvider } from '@razorpay/i18nify-react';

import App from './app';
import { IntlOptionsProvider } from './context/intlOptionsContext';
import { LocaleProvider } from './context/localeContext';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <I18nProvider>
    <LocaleProvider>
      <IntlOptionsProvider>
        <HelmetProvider>
          <BrowserRouter>
            <Suspense>
              <App />
            </Suspense>
          </BrowserRouter>
        </HelmetProvider>
      </IntlOptionsProvider>
    </LocaleProvider>
  </I18nProvider>
);
