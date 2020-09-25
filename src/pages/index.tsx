import Appbar from "@src/components/Appbar";
import { useToggleDarkMode } from "@src/utils/hooks/useToggleDarkMode.hook";
import { ReactNode } from "react";
import tw, { styled } from "twin.macro";

export default function Home(): ReactNode {
  const [, toggleDarkMode] = useToggleDarkMode();

  return (
    <Div>
      <Appbar />
      I came across the webdev subreddit, which was full of amazing things
      people could do on the web. Out of curiosity, I learned HTML and CSS, but
      quickly moved on after boxes refused to be centered.
      <br />
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </Div>
  );
}

const Div = styled.div`
  ${tw`bg-primary`}
`;
