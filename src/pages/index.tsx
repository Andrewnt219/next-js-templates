import tw, { styled } from "twin.macro";

export default function Home() {
  return (
    <Div>
      I came across the webdev subreddit, which was full of amazing things
      people could do on the web. Out of curiosity, I learned HTML and CSS, but
      quickly moved on after boxes refused to be centered.
    </Div>
  );
}

const Div = styled.div`
  ${tw`bg-textColor text-primary`}
`;
