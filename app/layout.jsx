import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
import { StoreHydration } from "@/components/store-hydration";
import { ReduxProvider } from "@/store/provider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ variable: "--font-display", subsets: ["latin"], weight: ["400", "600", "700"] });
const inter = Inter({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "ZoeLit Commerce | Premium Online Store",
  description: "A premium e-commerce storefront with account dashboard, cart, checkout, and order management.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL,GRAD@400,0,0&display=swap"
        />
      </head>
      <body
        className="min-h-screen bg-background font-sans text-body-md text-on-surface antialiased"
        suppressHydrationWarning
      >
        <ReduxProvider>
          <StoreHydration />
          {children}
          <Toaster closeButton richColors position="top-right" />
        </ReduxProvider>
      </body>
    </html>
  );
}
