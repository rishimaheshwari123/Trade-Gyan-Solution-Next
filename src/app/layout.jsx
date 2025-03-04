import "./globals.css";
import Wrapper from "./wrapper";

export const generateMetadata = () => {
  return {
    title: "Trade Gyan Solutions - Expert Investment and Trading Advisory",
    description:
      "Trade Gyan Solutions is a SEBI registered investment advisory in India, offering expert recommendations for NSE stock trading, F&O, commodities (MCX, NCDEX), with an impressive accuracy of 80-90%.",
    keywords:
      "investment advisory, SEBI registered, stock trading, NSE Recommendation, F&O recommendations, MCX trading, NCDEX commodities, trading accuracy, stock market, investment strategies, financial advisory",
    url: "https://www.tradegyan.co/",
    image: "/logo192.png",

    // Open Graph Tags
    openGraph: {
      type: "website",
      url: "https://www.tradegyan.co/",
      title: "Trade Gyan Solutions - Expert Investment and Trading Advisory",
      description:
        "Trade Gyan Solutions offers expert investment advice for stocks and commodities with high accuracy.",
      image: "/logo192.png",
    },

    // Twitter Tags
    twitter: {
      card: "summary_large_image",
      title: "Trade Gyan Solutions - Expert Investment and Trading Advisory",
      description:
        "Trade Gyan Solutions offers expert investment advice for stocks and commodities with high accuracy.",
      image: "/logo192.png",
    },
  };
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      <meta name="google-site-verification" content="_FkUfWrB9sfaw7phpUYIqgEl4MBD1xE0wViYTfaf2yU"/>
      <link rel="canonical" href="https://www.tradegyan.co/" />
      <link rel="preload" href="https://images.inc.com/uploaded_files/image.jpg" as="image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Trade Gyan",
            url: "https://www.tradegyan.co/",
            logo: "https://www.tradegyan.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftradegyan.b8071fe1.png&w=1920&q=75",
            description:
              "Trade Gyan Solutions is a SEBI registered investment advisory offering expert recommendations for NSE stock trading, F&O, commodities, and more with high accuracy.",
          })}
        </script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-826260110"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "AW-826260110");
            `,
          }}
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {'send_to': 'AW-826260110/WudeCP-_8XoQjvX-iQM'});
            `,
          }}
        />
      </head>
      <body>
        <Wrapper>{children}</Wrapper>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {},
              Tawk_LoadStart = new Date();
              (function () {
                var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = "https://embed.tawk.to/5a1694c2bb0c3f433d4cacbc/default";
                s1.charset = "UTF-8";
                s1.setAttribute("crossorigin", "*");
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        ></script>
      </body>
    </html>
  );
}
