import ".././node_modules/bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product.jsx";

function Projects() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      partialVisibilityGutter: 100 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1324, min: 992 },
      items: 2,
      partialVisibilityGutter: 150 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 992, min: 490 },
      items: 2,
      partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    mobile1: {
      breakpoint: { max: 440, min: 0 },
      items: 1,
      partialVisibilityGutter: 80 // this is needed to tell the amount of px that should be visible.
    },
    mobile2: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
      partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    mobile3: {
      breakpoint: { max: 350, min: 0 },
      items: 1,
      partialVisibilityGutter: -2 // this is needed to tell the amount of px that should be visible.
    }
  }

  return (
    <div>
      <section className="frontend container">
        <p className="frontend_para welcome_para_large">Projects</p>
        <div className="frontend_card">
          <div className="card_body">
            <Carousel responsive={responsive}
            removeArrowOnDeviceType={["mobile1","mobile2","mobile3"]}
            partialVisible={true}>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
