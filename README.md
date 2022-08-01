# LNURLw Streamer

This is a wrapper around the LNbits LNURLw shareable link page. A success message is displayed whenever someone successfully claims an LNURL withdraw payment. LNURL withdraw QR code is refreshed after every payment.

example Webhook URL in the LNURLw settings on LNbits: https://lnurlw.vercel.app/api

example URL: https://lnurlw.vercel.app/?lnurlwUrl=https://559ff1ec4c.d.voltageapp.io/withdraw/6V6Lny3EdojGNCWEkvEDBv

Set up the browser source in OBS to use this lnurlw.vercel.app URL. Dimensions should be width 1700 and height 800. You can resize and crop the source once it's on the screen. Make sure to replace the `lnurlwUrl` query param with your shareable LNURLw link from LNbits.

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
