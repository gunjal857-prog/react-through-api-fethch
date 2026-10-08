import { useState } from "react";
import { AiFillAlert } from "react-icons/ai";

const Nav = () => {

  const [box, setBox] = useState(false);

  


  return (
    <div className="navbar">

      <div
        className="home"
        onMouseEnter={() => setBox(true)}
        onMouseLeave={() => setBox(false)}
      >
        <h1>Home</h1>

        {box && (
          <div className="boxx"
             onMouseEnter={() => setBox(true)}
        onMouseLeave={() => setBox(false)}>
            <h3>Department</h3>
            {box && (
              <div className="boxx2">
                <h4>Chemical</h4>
                <h4>cheking</h4>
                <h4>Lab</h4>
                <h4>Accounts</h4>
              </div>
            )}
            <h3>Sales</h3>
            <h3>Dispatch</h3>
            <h3>Stock</h3>
          </div>
        )}
      </div>

      <h1>About</h1>

      <h1>Contact</h1>

      <h1>
        <AiFillAlert />
      </h1>

    </div>
  );
};

export default Nav;