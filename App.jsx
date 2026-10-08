
import { useState, useEffect } from "react";
import axios from "axios";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { BiSolidUserPin } from "react-icons/bi";

const App = () => {

  const [Data, setData] = useState([]);

  async function getdata() {
    try {
      const get = await axios.get("https://dummyjson.com/posts");

      console.log(get.data.posts);

      setData(get.data.posts);

    } catch (error) {
      console.log("no data found", error);
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  if (Data.length <= 0) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div className="main">

      {Data.map((value, id) => (
        <div className="card" key={id}>

          <div className="title">

          <h3>Title : {value.title}</h3>
          </div>
         
         
         <div className="section2">

          <div className="body">
          <h3>Body : {value.body}</h3>

          </div>
         
<div className="tags">

            <h4>Tags :  {value.tags.join(" , ")}</h4>
</div>
         </div>

<div className="section1">


  <div className="likes">
<FcLike className="likeicons"   />
      <h3>{value.reactions.likes}</h3>
  </div>


      <div className="dislikes">
        <FcDislike className="disslikeicone"/> 
         <h3>{value.reactions.dislikes}</h3>
      </div>
      
      <div className="view">
        <FaEye className="viewicone"/>
      <h3>{value.views}</h3>
      </div>
     
     
      <div className="userid">
        <BiSolidUserPin  className="yseridicone"/> 
      <h3>{value.userId}</h3>
</div>

      </div>
     
          
        </div>
      ))}

    </div>
  );
};

export default App;

