import { styled } from "@mui/material";

const MainDiv = styled("div")({
  height: "100vh",
  fontSize: "25px",
  textAlign: "center",
});

const Home = () => {
  return (
    <div>
      <MainDiv>
        <div>
          <h1>Welcome</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque saepe fuga corrupti, rerum reiciendis nam libero maiores iste error laboriosam optio alias perferendis ipsa! Velit animi expedita adipisci fuga odit, atque laborum, esse sint odio doloremque vero illo perspiciatis ipsam tempore veritatis? Debitis molestiae obcaecati nesciunt repellendus cumque error.</p>
        </div>
      </MainDiv>
    </div>
  );
};

export default Home;
