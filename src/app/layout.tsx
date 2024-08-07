import type { Metadata } from "next";
import ChakraProviders from "@/contexts/ChakraProviders";

export const metadata: Metadata = {
  title: "Grandiflores",
  description: "Réserver une consultation rapidement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="NdA_zSvH1BddkYeecV7ihWQBrZnaKmFyR3RbQF-V__g"
      />
      <body>
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  );
}
