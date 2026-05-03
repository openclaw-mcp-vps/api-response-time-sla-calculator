import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SLA Credit Calculator — Automate API Downtime Credits",
  description: "Monitor API response times and automatically calculate SLA credits owed to customers when thresholds are breached."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c0faa741-4759-4199-9242-6a0299fe589f"></script>
      </head>
      <body style={{ backgroundColor: "#0d1117", color: "#c9d1d9", fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
