import { PropsWithChildren } from "react";
import { Container } from "react-bootstrap";
import Navigation from "../components/Navigation";

function Main({ children }: PropsWithChildren) {
  return (
    <>
      <Navigation />
      <Container className="p-3">{children}</Container>
    </>
  );
}

export default Main;
