import "./globals.css";

export const metadata = {
  title: "Ask the Therapist",
  description: "Speech therapy website concept"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
