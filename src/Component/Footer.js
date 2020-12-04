import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter color="unique-color-dark mt-4" className="page-footer mb-0 font-small text-white bg-dark">
      <div style={{ backgroundColor: "#6351ce" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
                Hãy kết nối với chúng tôi!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a className="fb-ic ml-0" href="https://www.facebook.com/">
                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
              </a>
              <a className="tw-ic" href="https://www.twitter.com/">
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </a>
              <a className="gplus-ic"  href="https://www.google.com/">
                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              </a>
              <a className="li-ic" href="https://www.linkedin.com/">
                <i className="fab fa-linkedin-in white-text mr-lg-4" > </i>
              </a>
              <a className="ins-ic" href="https://www.instagram.com/">
                <i className="fab fa-instagram white-text mr-lg-4" > </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Watch Store</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              Cảm ơn các bạn đã tin tưởng lựa chọn Watch Store.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Sản Phẩm</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">Đồng hồ nữ</a>
            </p>
            <p>
              <a href="#!">Đồng hồ nam</a>
            </p>
            <p>
              <a href="#!">Đồng hồ couple</a>
            </p>
            <p>
              <a href="#!">Phụ kiện</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Trợ giúp</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">Tài Khoản</a>
            </p>
            <p>
              <a href="#!">Trợ Giúp</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Liên Hệ</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> 144 Phạm Phú Thứ, Quận 6, Tp Hồ Chí Minh
            </p>
            <p>
              <i class="fas fa-location-arrow mr-3" /> 205 Nguyễn Xí, Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> greenwich.edu.vn
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 0933108554
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> Watch Store </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;
