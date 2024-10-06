import react from "react";
import Main_section from "../../components/main_section/Main_section";
import NavBar from "../../components/navbar/NavBar"
import { Container } from "@mantine/core";

const HomePage = () => {
  return (
    <Container size="100%" style={{
      padding: 0, // Remove padding if any
    }   }
    >

      <NavBar />
      <Main_section />
    </Container>


  );
};

export default HomePage;
