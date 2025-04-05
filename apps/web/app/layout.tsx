import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "AI Photo & Video Generator | YourFace AI",
  description: "Create stunning AI-generated photos and videos with YourFace AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
            {/* Google Tag Manager */}
      <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5HV6WDVX');` }} />
      <script src="https://analytics.ahrefs.com/analytics.js" data-key="MHMbyYvOVSBUXcdH6EogjQ" async></script>
      <script>
      var ahrefs_analytics_script = document.createElement('script');
      ahrefs_analytics_script.async = true;
      ahrefs_analytics_script.src = 'https://analytics.ahrefs.com/analytics.js';
      ahrefs_analytics_script.setAttribute('data-key', 'MHMbyYvOVSBUXcdH6EogjQ');
      document.getElementsByTagName('head')[0].appendChild(ahrefs_analytics_script);
      </script>
      {/* End Google Tag Manager */}
      <link rel="apple-touch-icon" sizes="76x76" href="https://pub-1c024d6181db4a8d9ce127046cdbc59f.r2.dev/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="https://pub-1c024d6181db4a8d9ce127046cdbc59f.r2.dev/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="https://pub-1c024d6181db4a8d9ce127046cdbc59f.r2.dev/favicon-16x16.png"/>
      <link rel="icon" href="https://pub-1c024d6181db4a8d9ce127046cdbc59f.r2.dev/favicon.ico" type="image/x-icon"/>
      <link rel="manifest" href="https://yourfaceai.com/manifest.json"/>
      <link rel="sitemap" href="https://yourfaceai.com/sitemap.xml" type="application/xml"/>
      <meta name="robots" content="index, follow" />
        <meta name="robots" content="noai, noimageai"/>
      <meta name="application-name" content="YourFace AI"/>
      <meta name="apple-mobile-web-app-title" content="YourFace AI"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="#000000"/>
      <meta name="theme-color" content="#000000"/>
        <link rel="canonical" href="https://yourfaceai.com/"/>
      <meta property="og:title" content="AI Photo &amp; Video Generator | YourFace AI"/>
      <meta property="og:url" content="https://yourfaceai.com/"/>
      <meta property="og:site_name" content="YourFace AI"/>
      <meta property="og:description" content="Generate photorealistic images and videos of people with AI. Take stunning photos of people with the first AI Photographer! Generate photo and video content for your social media with AI. Save time and money and do an AI photo shoot from your laptop or phone instead of hiring an expensive photographer. Take photos featuring yourself as an AI model. Every AI model you create gets FREE photos.					✏️ Upload your selfies and create your own AI model							👸 Or create 100% AI influencers and monetize them							📸 Take 100% AI photos in any pose, place or action							🎞️ Create 100% AI videos from any AI photo you take							❤️ Run photo packs like Tinder or Old Money		"/>
      <meta property="og:image" content="https://photoai.com/assets/social-image-3.jpg"/>
      <meta property="og:type" content="website"/>
      <meta property="og:updated_time" content="2025-04-05T14:44:37+00:00"/>
      <meta httpEquiv="last-modified" content="2025-04-05T14:44:37+00:00"/> 
      <meta name="last-modified" content="2025-04-05T14:44:37+00:00"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@yourface_ai"/>
      <meta name="twitter:creator" content="@yourface_ai"/>
      <meta name="twitter:title" content="AI Photo &amp; Video Generator | YourFace AI"/>
      <meta name="twitter:description" content="Generate photorealistic images and videos of people with AI. Take stunning photos of people with the first AI Photographer! Generate photo and video content for your social media with AI. Save time and money and do an AI photo shoot from your laptop or phone instead of hiring an expensive photographer. Take photos featuring yourself as an AI model. Every AI model you create gets FREE photos.					✏️ Upload your selfies and create your own AI model							👸 Or create 100% AI influencers and monetize them							📸 Take 100% AI photos in any pose, place or action							🎞️ Create 100% AI videos from any AI photo you take							❤️ Run photo packs like Tinder or Old Money		"/>
      <meta name="twitter:image:src" content="https://photoai.com/assets/social-image-3.jpg"/>
      <meta name="twitter:url" content="https://yourfaceai.com/"></meta>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph":[
			{
				"@type":"Organization",
				"@id":"https://yourfaceai.com/#organization",
				"name":"YourFace AI",
				"url":"https://yourfaceai.com",
				"sameAs":[
					"https://www.instagram.com/yourfaceai.com/"
				],
				"email":"support@yourfaceai.com",
				"logo":{
					"@type":"ImageObject",
					"@id":"https://yourfaceai.com/#logo",
					"url":"https://pub-1c024d6181db4a8d9ce127046cdbc59f.r2.dev/yourfaceai_logo.svg",
					"contentUrl":"https://pub-1c024d6181db4a8d9ce127046cdbc59f.r2.dev/yourfaceai_logo.svg",
					"caption":"YourFace AI",
					"inLanguage":"en-US"
				},
				"contactPoint":[
					{
						"@type":"ContactPoint",
						"telephone":"+65 0000 0000",
						"contactType":"customer support"
					}
				]
			},
			{
				"@type":"WebSite",
				"@id":"https://yourfaceai.com/#website",
				"url":"https://yourfaceai.com",
				"name":"YourFace AI",
				"publisher":{
					"@id":"https://yourfaceai.com/#organization"
				},
				"inLanguage":"en-US"
			},
			{
				"@type":"ImageObject",
				"@id":"https://photoai.com/assets/social-image-3.jpg",
				"url":"https://photoai.com/assets/social-image-3.jpg",
				"caption":"",
				"inLanguage":"en-US"
			},
						{
				"@type":"Product",
				"brand":{
					"@type":"Brand",
					"name":"YourFace AI"
				},
				"name":"AI Photo & Video Generator | YourFace AI",
				"description":"Generate photorealistic images and videos of people with AI. Take stunning photos of people with the first AI Photographer! Generate photo and video content for your social media with AI. Save time and money and do an AI photo shoot from your laptop or phone instead of hiring an expensive photographer. Take photos featuring yourself as an AI model. Every AI model you create gets FREE photos.\t\t\t\t\t\u270f\ufe0f Upload your selfies and create your own AI model\t\t\t\t\t\t\t\ud83d\udc78 Or create 100% AI influencers and monetize them\t\t\t\t\t\t\t\ud83d\udcf8 Take 100% AI photos in any pose, place or action\t\t\t\t\t\t\t\ud83c\udf9e\ufe0f Create 100% AI videos from any AI photo you take\t\t\t\t\t\t\t\u2764\ufe0f Run photo packs like Tinder or Instagram\t\t",
				"sku":"",
				"category":"Photo Shoots",
				"mainEntityOfPage":{
					"@id":"https://yourfaceai.com/#webpage"
				},
				"aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
					"bestRating":"5",
					"ratingCount":"1873",
					"reviewCount":"1873"
				},
				"review":[
					{
						"@type":"Review",
						"@id":"https://yourfaceai.com/#li-comment-1505902",
						"description":"YourFace AI is just fantastic! I take amazing photos of my wife, family and friends. As a photographer I use it to test ideas before creating a real photoshoot. I strongly recommend!",
						"datePublished":"2025-03-12 16:19:56",
						"reviewRating":{
							"@type":"Rating",
							"ratingValue":"5",
							"bestRating":"5",
							"worstRating":"1"
						},
						"author":{
							"@type":"Person",
							"name":"Everaldo"
						}
					},
					{
						"@type":"Review",
						"@id":"https://yourfaceai.com/#li-comment-1502230",
						"description":"Cool AI tool for image generation! I could create a lot of truly amazing pictures in different locations with different outfits! All my friends were surprised and loved my pictures!",
						"datePublished":"2025-03-11 12:47:07",
						"reviewRating":{
							"@type":"Rating",
							"ratingValue":"5",
							"bestRating":"5",
							"worstRating":"1"
						},
						"author":{
							"@type":"Person",
							"name":"Iryna"
						}
					},
					{
						"@type":"Review",
						"@id":"https://yourfaceai.com/#li-comment-1502060",
						"description":"Good input = good output. Very fun! Took me some effort to get the models to feel accurate but once I got the right input it was amazing. YourFace AI was very responsive to my questions.",
						"datePublished":"2025-03-17 13:31:23",
						"reviewRating":{
							"@type":"Rating",
							"ratingValue":"4",
							"bestRating":"5",
							"worstRating":"1"
						},
						"author":{
							"@type":"Person",
							"name":"Jordan"
						}
					},
					{
						"@type":"Review",
						"@id":"https://yourfaceai.com/#li-comment-1500408",
						"description":"The quality of YourFace AI's work speaks for itself! I was amazed by how this AI Photographer can make the whole experience fun and enjoyable while getting the best out of their clients, no matter their skill level. Working with YourFace AI was an absolute pleasure, and I cannot recommend them enough. The convenience of having a professional photo shoot from the comfort of your own home is a game-changer. I'll definitely be using their services again in the future!",
						"datePublished":"2021-09-05 09:05:51",
						"reviewRating":{
							"@type":"Rating",
							"ratingValue":"5",
							"bestRating":"5",
							"worstRating":"1"
						},
						"author":{
							"@type":"Person",
							"name":"Adam Henry"
						}
					},
					{
							"@type":"Review",
							"@id":"https://pyourfaceai.com/#li-comment-1498536",
							"description":"I was skeptical at first about using an AI Photographer, but YourFace AI completely exceeded my expectations! The photos turned out absolutely stunning. The AI Photographer has an incredible eye for detail and composition. It's mind-blowing how I can now have professional-quality photoshoots without leaving my house. I highly recommend YourFace AI to anyone looking for convenience, quality, and affordability.",
							"datePublished":"2021-07-22 14:12:36",
							"reviewRating":{
									"@type":"Rating",
									"ratingValue":"5",
									"bestRating":"5",
									"worstRating":"1"
							},
							"author":{
									"@type":"Person",
									"name":"Emily Sullivan"
							}
						},
						{
							"@type":"Review",
							"@id":"https://photoai.com/#li-comment-1495322",
							"description":"YourFace AI is a game-changer! As a busy entrepreneur, I don't have time to schedule and travel to traditional photo shoots. With this AI Photographer, I can capture professional-grade images for my brand right from my laptop. The results are impressive, and the whole process is incredibly efficient. I'm thrilled with the quality and convenience. This service is worth every penny!",
							"datePublished":"2021-05-09 11:27:19",
							"reviewRating":{
									"@type":"Rating",
									"ratingValue":"5",
									"bestRating":"5",
									"worstRating":"1"
							},
							"author":{
									"@type":"Person",
									"name":"Michael Thompson"
							}
						},
						{
							"@type":"Review",
							"@id":"https://yourfaceai.com/#li-comment-1491234",
							"description":"I am amazed by the capabilities of YourFace AI's AI Photographer. It captures moments with such precision and artistry. The attention to detail in the photographs is remarkable. I never thought I could achieve such professional-looking shots without hiring an expensive photographer. The convenience and affordability of this service make it a no-brainer. I highly recommend YourFace AI to everyone!",
							"datePublished":"2021-03-14 09:58:03",
							"reviewRating":{
									"@type":"Rating",
									"ratingValue":"5",
									"bestRating":"5",
									"worstRating":"1"
							},
							"author":{
									"@type":"Person",
									"name":"Sophia Chen"
							}
						},
						{
							"@type":"Review",
							"@id":"https://photoai.com/#li-comment-1489002",
							"description":"YourFace AI's AI Photographer is a revelation! The quality of the photos it produces is outstanding. The attention to detail and the ability to capture emotions are remarkable. I love how I can now have personalized photo shoots anytime, anywhere, without the hassle of scheduling and coordinating with a human photographer. This service has truly made my life easier and more beautiful.",
							"datePublished":"2021-01-25 16:40:12",
							"reviewRating":{
									"@type":"Rating",
									"ratingValue":"5",
									"bestRating":"5",
									"worstRating":"1"
							},
							"author":{
									"@type":"Person",
									"name":"David Patel"
							}
						}
				],
				"offers":{
					"@type":"Offer",
					"price":"39",
					"priceCurrency":"USD",
					"priceValidUntil":"2026-04-05",
					"availability":"https://schema.org/InStock",
					"itemCondition":"NewCondition",
					"url":"https://yourfaceai.com/",
					"seller":{
						"@type":"Organization",
						"@id":"https://yourfaceai.com/",
						"name":"YourFace AI",
						"url":"https://yourfaceai.com",
						"logo":"https://pub-1c024d6181db4a8d9ce127046cdbc59f.r2.dev/yourfaceai_logo.svg"
					},
					"shippingDetails": {
						"@type":"OfferShippingDetails",
						"deliveryTime":{
							"@type":"ShippingDeliveryTime",
							"handlingTime": {
								"@type": "QuantitativeValue",
								"minValue": "0",
								"maxValue": "30",
								"unitCode": "MIN"
							},
							"transitTime": {
								"@type": "QuantitativeValue",
								"minValue": "0",
								"maxValue": "10",
								"unitCode": "SEC"
							}
						}
					},
					"hasMerchantReturnPolicy": {
						"@type": "MerchantReturnPolicy",
						"returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
						"merchantReturnDays": 30,
						"returnMethod": "https://schema.org/ReturnInStore",
						"returnFees": "https://schema.org/FreeReturn"
					}
				},
				"@id":"https://yourfaceai.com/#richSnippet",
				"image":{
					"@id":"https://photoai.com/assets/social-image-3.jpg"
				}
			}
		]
	})
  }}
/>

      </head>
      <ClerkProvider>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
            {/* Google Tag Manager (noscript) */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5HV6WDVX"
      height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      {/* End Google Tag Manager (noscript) */}
      <div>
      </div>
        {children}
        {/* 100% privacy-first analytics */}
      <script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      </body>
      </ClerkProvider>
    </html>
  );
}
