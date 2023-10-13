import { useEffect, useState } from "react";
import styled from "styled-components";
import Highlight from "react-highlight";

const CodeContainer = styled.div`
  margin: 16px;
  font-size: 12px;
  border-radius: 12px;
  overflow: clip;
`;

export default function CodeDisplay({ src }: { src: string }) {
  const [jsContent, setJsContent] = useState("");

  useEffect(() => {
    fetch(src)
      .then((response) => {
        // console.log(response.text());
        return response.text();
      })
      .then((data) => {
        console.log(data);
        setJsContent(data);
      });
  }, []);

  return (
    <CodeContainer>
      <Highlight className="javascript">{jsContent}</Highlight>
    </CodeContainer>
  );
}
