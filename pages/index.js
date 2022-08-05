import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import { useRouter } from "next/router";
import bolt11Decoder from "light-bolt11-decoder";

const pusherAppKey = process.env.NEXT_PUBLIC_PUSHER_APP_KEY;
const pusherCluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER;

export default function Home() {
  const [paymentHash, setPaymentHash] = useState(null);
  const [amount, setAmount] = useState(null);
  const { query } = useRouter();
  const lnurlwUrl = query.lnurlwUrl;

  useEffect(() => {
    const pusher = new Pusher(pusherAppKey, {
      cluster: pusherCluster,
    });
    const channel = pusher.subscribe("my-channel");

    channel.bind("lnbits-lnurlw-success", (data) => {
      console.log("data", data);
      setAmount(
        bolt11Decoder
          .decode(data.payment_request)
          .sections.find(({ name }) => name === "amount").value / 1000
      );
      setPaymentHash(data.payment_hash);
      setTimeout(() => setAmount(null), 3000);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>LNURLw Streamer</title>
        <meta
          name="description"
          content="Wrapper for the LNbits LNURLw plugin page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!lnurlwUrl && !amount && (
        <h1>Missing required lnurlwUrl query param.</h1>
      )}
      {lnurlwUrl && !amount && (
        <iframe
          key={paymentHash}
          src={lnurlwUrl}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            border: "none",
            zIndex: 2,
          }}
        ></iframe>
      )}
      {amount && (
        <div
          style={{
            zIndex: 3,
            position: "relative",
            marginLeft: 310,
            marginTop: 99,
            width: 461,
            height: 461,
          }}
        >
          <h1
            style={{
              fontSize: 42,
              lineHeight: '461px',
              textAlign: "center",
            }}
          >
            {amount.toString().replace(/000$/, "k")} sats claimed ⚡️
          </h1>
        </div>
      )}
    </div>
  );
}
