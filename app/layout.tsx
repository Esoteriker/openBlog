import type { Metadata, Viewport } from "next";
import { LocaleProvider } from "@/components/locale-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { defaultLocale, profileDataByLocale } from "@/data/profile";
import "./globals.css";

const profileData = profileDataByLocale[defaultLocale];

export const metadata: Metadata = {
  metadataBase: new URL(profileData.seo.url),
  title: profileData.seo.title,
  description: profileData.seo.description,
  applicationName: "Haidong Xu Portfolio",
  keywords: [
    "Solution Architect",
    "AI Agent Application Developer",
    "Backend Systems Engineer",
    "Microservices",
    "Distributed Systems",
    "Event-Driven Architecture"
  ],
  authors: [{ name: "Haidong Xu" }],
  creator: "Haidong Xu",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    title: profileData.seo.title,
    description: profileData.seo.description,
    url: profileData.seo.url,
    siteName: profileData.name,
    images: [
      {
        url: profileData.seo.ogImage,
        width: 1200,
        height: 630,
        alt: profileData.seo.title
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: profileData.seo.title,
    description: profileData.seo.description,
    images: [profileData.seo.ogImage]
  },
  alternates: {
    canonical: profileData.seo.url
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
