# LNURLw Streamer

This is a wrapper around the LNbits LNURLw shareable link page. A success message is displayed whenever someone successfully claims an LNURL withdraw payment. LNURL withdraw QR code is refreshed after every payment.

example URL: https://lnurlw.vercel.app/?lnurlwUrl=https://559ff1ec4c.d.voltageapp.io/withdraw/H2YKsaxZTY8TzAYCyeMyTV

example Webhook URL in the LNURLw settings on LNbits: https://lnurlw.vercel.app/api

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
