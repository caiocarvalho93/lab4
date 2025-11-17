import { Link } from "react-router-dom";

const Home = () => (


  <div>
    
    <h1>Welcome to My Blog</h1>
    <p>this is my blog, blah blah blah</p>
    <p>check me out <Link to="/blog">post</Link></p>
  </div>
);

export default Home;