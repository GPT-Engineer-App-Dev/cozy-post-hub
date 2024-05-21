import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Text fontSize="lg">A place to share my thoughts and experiences.</Text>
        <Box>
          <Link to="/posts">
            <Button colorScheme="teal" size="lg">View Posts</Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;