import Document, {
  DocumentContext,
  Head,
  NextScript,
  Main,
  Html,
} from "next/document";
import { ReactElement } from "react";
import { ServerStyleSheet } from "styled-components";

type GetInitialPropsReturn = {
  styles: ReactElement;
  html: string;
  head?: (ReactElement | null)[] | undefined;
};
export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<GetInitialPropsReturn> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): ReactElement {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                try {
                  const currentTheme = localStorage.getItem("theme");
                  switch (currentTheme) {
                    case "light-mode":
                      document.body.classList.add("light-mode");
                      return;
                
                    case "dark-mode":
                      document.body.classList.add("dark-mode");
                      return;
                      
                    default:
                      break;
                  }
                } catch(error) {
                  console.log(error);
                  console.warn('Failed to access localStorage');
                }

                const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                if(userPrefersDark) {
                  document.body.classList.add("dark-mode");
                  return;
                } else {
                  document.body.classList.add("light-mode");
                  return;
                }
              })();
            `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
