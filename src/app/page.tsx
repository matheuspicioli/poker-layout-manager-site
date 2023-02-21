import Features from "./features";
import Footer from "./footer";
import Navbar from "./navbar";
import Topbar from "./topbar";

export default function Home() {
  return (
    <>
      {/* <Spinner /> */}
      <Topbar />
      <Navbar />
      {/* <FullScreenSearch /> */}
      {/* <Facts /> */}
      {/* <About /> */}
      <Features />
      {/* <Service /> */}
      {/* <PricingPlan /> */}
      {/* <Quote /> */}
      {/* <Testimonial /> */}
      {/* <Team /> */}
      {/* <Blog /> */}
      {/* <Vendor /> */}
      <Footer />
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>

      <script src="https://code.jquery.com/jquery-3.4.1.min.js" async={true}></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" async={true}></script>
      <script src="lib/wow/wow.min.js" async={true}></script>
      <script src="lib/easing/easing.min.js" async={true}></script>
      <script src="lib/waypoints/waypoints.min.js" async={true}></script>
      <script src="lib/counterup/counterup.min.js" async={true}></script>
      <script src="js/main.js" async={true}></script>
    </>
  );
}
