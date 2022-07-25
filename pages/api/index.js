import * as Pusher from "pusher";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const pusher = new Pusher({
        appId: process.env.PUSHER_APP_ID,
        key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
        secret: process.env.PUSHER_SECRET,
        cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
        useTLS: true,
      });

      pusher.trigger("my-channel", "lnbits-lnurlw-success", req.body, () => {
        res.status(200).end('ok');
      });
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${res.method} Not Allowed`);
  }
}
