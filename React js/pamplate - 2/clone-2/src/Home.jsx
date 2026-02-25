import React from "react";
import "./St.css"
// import St from './St.css'

import './style.css'
import download from './logo1/download.png'

export default function Home() {
  return (

    <div>

      <nav>
        <div class="logo-box">
        {/* public  */}
          {/* <img src="/logo1/download.png" class="logo" alt="" /> */}
          
          {/* src */}
          <img src={download} class="logo" alt="" />
        </div>
        <div class="btn-group nav-margin">
          <button type="button" class="btn">
            Home
          </button>

          <button type="button" class="btn">
            About
          </button>

          <div class="btn-group dropdown ">
            <button
              type="button"
              class="btn dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Products
            </button>
            <ul class="dropdown-menu">
              <li>
                <a href="#" class="dropdown-item">
                  {" "}
                  Pre Sales AI{" "}
                </a>
              </li>
              <li>
                <a href="#" class="dropdown-item">
                  {" "}
                  Pre Sales Management{" "}
                </a>
              </li>
              <li>
                <a href="#" class="dropdown-item">
                  Customer Loyalty Management
                </a>
              </li>
              <li>
                <a href="#" class="dropdown-item">
                  {" "}
                  Channel Partner Management{" "}
                </a>
              </li>
              <li>
                <a href="#" class="dropdown-item">
                  Marketing Automation & Campaign Management
                </a>
              </li>
              <li>
                <a href="#" class="dropdown-item">
                  {" "}
                  CRM Software Management{" "}
                </a>
              </li>
              <li>
                <a href="#" class="dropdown-item">
                  Virtual Site Visit Management
                </a>
              </li>
              <li>
                <a href="#" class="dropdown-item">
                  Physical Site Visit Management
                </a>
              </li>
              <li>
                <a href="#" class="dropdown-item">
                  {" "}
                  Sales Management{" "}
                </a>
              </li>
              <li>
                <a href="#" class="dropdown-item">
                  {" "}
                  Facility Management{" "}
                </a>
              </li>
              <li>
                <a href="#" class="dropdown-item">
                  Commercial Property Management
                </a>
              </li>
            </ul>
          </div>
          <button type="button" class="btn">
            Case Studies
          </button>
          <button type="button" class="btn">
            Work Culture
          </button>
          <button type="button" class="btn">
            Careers
          </button>

          <button type="button" class="btn yello-btn text-dark">
            Contact us
          </button>
        </div>
        <button type="button" class="btn bg-success btn-set">
          ronak dabhi{" "}
        </button>
      </nav>


      <div class="con"><hr></hr>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed doloremque ad deserunt illum distinctio corporis repudiandae odit aut, hic, quia quae laboriosam.
      </div>
    </div>

    // ==================================================

//     <div class="con">
//     {/* srs inside folder image */}
//       {/* <img src="image_f/back1.jpg" />   */}


// {/* public side logo to access */}
// {/* <img src='/logo1/download.png' style={{width:"20rem"}}  /> */}

// {/* public side define image  */}
// {/* <img src="/image_f/back1.jpg" /> */}
//     </div>
  );
}
