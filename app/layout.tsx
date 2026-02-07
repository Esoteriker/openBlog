import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { profileData } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profileData.seo.url),
  title: profileData.seo.title,
  description: profileData.seo.description,
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
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
