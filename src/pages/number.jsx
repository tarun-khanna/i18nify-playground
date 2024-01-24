import { Helmet } from 'react-helmet-async';

import { NumberView } from 'src/sections/number/view';

// ----------------------------------------------------------------------

export default function NumberPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <NumberView />
    </>
  );
}
