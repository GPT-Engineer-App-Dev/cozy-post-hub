import { Box, Heading, Text, VStack, Button, Input, Textarea } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "This is the content of the first post." },
    { id: 2, title: "Second Post", content: "This is the content of the second post." },
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPostData = { ...newPost, id: posts.length + 1 };
    setPosts([...posts, newPostData]);
    setNewPost({ title: "", content: "" });
    navigate("/posts");
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">Blog Posts</Heading>
        {posts.map(post => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.content}</Text>
          </Box>
        ))}
        <Box>
          <Link to="/">
            <Button colorScheme="teal" size="md">Back to Home</Button>
          </Link>
        </Box>
      <Box as="form" onSubmit={handleSubmit} mt={8}>
          <Heading as="h2" size="lg" mb={4}>Add a New Post</Heading>
          <Input
            placeholder="Title"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            mb={4}
          />
          <Textarea
            placeholder="Content"
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            mb={4}
          />
          <Button type="submit" colorScheme="teal" size="md">Submit</Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Posts;