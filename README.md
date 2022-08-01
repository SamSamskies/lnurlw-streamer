# LNURLw Streamer

This is a wrapper around the LNbits LNURLw shareable link page. A success message is displayed whenever someone successfully claims an LNURL withdraw payment. LNURL withdraw QR code is refreshed after every payment. See it in action on [one of my live streams](https://youtu.be/zpt9jtYHD8g).

![lnurlw-stream-demo](https://user-images.githubusercontent.com/3655410/182078199-06bdd8b8-f90a-4681-a039-63b25136f559.gif)


example Webhook URL in the LNURLw settings on LNbits: `https://lnurlw.vercel.app/api`

![Screen Shot 2022-08-01 at 12 28 54 AM](https://user-images.githubusercontent.com/3655410/182078423-f89fe86f-7bdc-48d2-bfe0-e8760179b88a.png)


example URL: https://lnurlw.vercel.app/?lnurlwUrl=https://559ff1ec4c.d.voltageapp.io/withdraw/6V6Lny3EdojGNCWEkvEDBv

Set up the browser source in OBS to use this lnurlw.vercel.app URL. Dimensions should be width 1700 and height 800. You can resize and crop the source once it's on the screen. Make sure to replace the `lnurlwUrl` query param with your shareable LNURLw link from LNbits.

<img width="587" alt="Screen Shot 2022-08-01 at 12 32 38 AM" src="https://user-images.githubusercontent.com/3655410/182078800-52f501c2-a576-4760-955f-fd55c84bea07.png">


## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
