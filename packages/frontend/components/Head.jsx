import NextHead from "next/head";

const DESCRIPTION =
  "An underground label with the purpose to bring unique artists together and form a sanctuary for the most enthusiastic listeners.";

export default function SanguHead(props) {
  let { titleText, metaImage = "/static/images/logo.png" } = props;

  let fullTitle = "Sanguine | " + titleText;

  return (
    <NextHead>
      <title>{fullTitle}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300"
        rel="stylesheet"
      />
      <style>{`html, body { margin: 0; padding: 0; }`}</style>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* Global Meta Data */}
      <meta name="title" content={fullTitle} />
      <meta name="description" content={DESCRIPTION} />
      <meta name="image" content={metaImage} />

      {/* Twitter specific card stuff */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sanguinecol" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={metaImage} />

      {/* Favicons and such */}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/static/favicons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/static/favicons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/static/favicons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/static/favicons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/static/favicons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/static/favicons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/static/favicons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/static/favicons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/static/favicons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/static/favicons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/static/favicons/ms-icon-144x144.png"
      />
    </NextHead>
  );
}
