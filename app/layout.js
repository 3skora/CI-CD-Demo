export const metadata = {
  title: 'CI/CD Demo App',
  description: 'Next.js app demonstrating CI/CD pipeline stages',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
