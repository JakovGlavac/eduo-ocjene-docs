export default {
  // github: 'https://github.com/shuding/nextra',
  // docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: ' – eduo eDnevnik API',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">
        <img src="https://ucarecdn.com/ccc57c9d-d666-4605-98f7-9e5da4d1c76f/-/preview/130x130/" />
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        API kakvog učenici zaslužuju
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="eduo eDnevnik API - API kakvog učenici zaslužuju" />
      <meta name="og:description" content="eduo eDnevnik API - API kakvog učenici zaslužuju" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://ucarecdn.com/327d1937-a99e-4816-a822-afd626cc11ab" />
      <meta name="twitter:site:domain" content="ocjene.eduo.help" />
      <meta name="twitter:url" content="https://ocjene.eduo.help" />
      <meta name="og:title" content="Nextra: Next.js static site generator" />
      <meta name="og:image" content="https://ucarecdn.com/327d1937-a99e-4816-a822-afd626cc11ab" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="https://ucarecdn.com/327d1937-a99e-4816-a822-afd626cc11ab/-/preview/144x144/" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>{new Date().getFullYear()} © eduo.</>,
  unstable_faviconGlyph: '🚀',
}
