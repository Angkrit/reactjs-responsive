import styled from "@emotion/styled";
import { Article } from "./Article";
import { Container } from "./components/Container";
import { Flex } from "./components/Flex";

function App() {
  const Header = styled.header`
    display: flex;
    justify-content: center;
    font-size: 90px;
    text-transform: uppercase;
    color: #e7e7e7;
  `;

  return (
    <main>
      <section className="section athletes">
        <Header>
          <Container>
            <Flex></Flex>
            <Flex>Athletes</Flex>
          </Container>
        </Header>
        <Article
          number="01"
          title="Connection"
          content="Connect with coaches directly, you can ping coaches to view profile."
        />
        <Article
          number="02"
          title="Collaboration"
          content="Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1."
          background="#F5F4F9"
        />
        <Article
          number="03"
          title="Growth"
          content="Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc "
          background="#5E3DB3"
          underlineColor="white"
          contentColor="white"
        />
      </section>
      <section className="section players"></section>
    </main>
  );
}

export default App;
