import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
 
  async function getData() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=NgaGQvUQxHYMhob92zB0aJci4LOx6Xmt7vS-Smq8iOs&page=${page}`
      );
      const data = await response.json();

      if (Array.isArray(data)) {
        setImage(prev=>prev.concat(data));
        setPage((prepage) => prepage + 1);
      }
    } catch (error) {
      console.error("Error fetching", error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
  
    getData();
  }, []);

  const handleScroll = () => {
    if(
    window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight || loading)
      return
      getData()
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);
  return (
    <>
    {console.log(image)}
      <h1>Image Gallery</h1>
      {image.map((item) => (
        <img key={item.id} src={item.urls.small} alt={item.alt_description} />
      ))}
      {loading && <h2>data is loading...</h2>}
          </>
  );
}

export default App;
