import ReduxProvider from "@/redux/provider";
import StyledComponentsRegistry from "@/registry";
import ThemeRegistry from "@/theme/ThemeRegistry";
import type { Metadata } from "next";
import favicon from "@/assets/icons/webIcon.png";

export const metadata: Metadata = {
  title: "Gaaana",
  description: "Play the Music",
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ThemeRegistry>
          <body>
            <ReduxProvider>{children}</ReduxProvider>
          </body>
        </ThemeRegistry>
      </StyledComponentsRegistry>
    </html>
  );
}
