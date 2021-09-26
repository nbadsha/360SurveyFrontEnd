import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
export const Header = () => {

  
  console.log(window.location.href);
    // function getActivated(link){
    //   if (window.location.pathname === link) {
    //     return 'nav-link text-white active'
    //   }
    //   else{
    //     return 'nav-link text-white'
    //   }
    // }
    return (
      // <nav className="navbar navbar-dark bg-primary text-center">
      //   {/* <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/EXL_Logo_RGB.jpg" style={imgStyle} alt="" /> */}
      //   <Link className="navbar-brand p-3" to="/">EXL 360° Survey</Link>

      //   <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      //     <li className="nav-item  m-2">
      //       <Link className="nav-link text-white" to='/adminPanel'>
      //         Admin Panel
      //       </Link>
      //     </li>
      //   </ul>
      // </nav>
      <>
        <nav className="navbar navbar-default py-5"></nav>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary ">
          <NavLink className="navbar-brand text-white px-3" to="/360survey">
            EXL 360° Survey
          </NavLink>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

          <div className="" id="navbarSupportedContent">
            {window.location.pathname !== "/collectSurvey" ? (
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link text-white"
                  activeClassName="active"
                  to="/uploadTraits">
                    Upload Traits
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white"
                    activeClassName="active"
                    to="/uploadCandidates"
                  >
                    Upload Candidates
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" activeClassName="active" to="/manageSurvey">
                    Manage Survey
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white"
                    activeClassName="active"
                    to="/surveyReport"
                  >
                    Survey Report
                  </NavLink>
                </li>
                {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item text-white" href="#">Action</a>
          <a className="dropdown-item text-white" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item text-white" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled text-white" href="#">Disabled</a>
      </li> */}
              </ul>
            ) : (
              ""
            )}
          </div>
        </nav>
      </>
    );
}
