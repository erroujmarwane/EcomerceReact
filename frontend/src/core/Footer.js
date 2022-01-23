import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="font-small bg-danger pt-4 mt-4">
      <MDBContainer fluid className="text-center text-white text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title mb-4">Links</h5>
            <ul className=" list-unstyled ">
              <li>
                <a href="#!" className="text-white text-decoration-none">Home</a>
              </li>
              <li >
                <a href="#!" className="text-white text-decoration-none">Product</a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">About</a>
              </li>
              
              
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 text-white">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;