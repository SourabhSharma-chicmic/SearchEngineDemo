import ImageTimelapse from "material-ui/svg-icons/image/timelapse";
import { useParams } from "react-router-dom";
import { Data } from "./Data.jsx";

const Descripiton = () => {
  const { title } = useParams();
  const val = Data.filter((item) => item.title == title);

  return <div>{val.length ? val.map((item) => {
    return (
      <>
        <div className="container">
          
          <div className="row">
            <div className="col-md-4 offset-4">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  class="card-img-top"
                  src="https://picsum.photos/200/"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title text-uppercase">{item.title}</h5>
                  <p class="card-text justify-content-center">
                    Author of this book is {item.author} and the book is written
                    in {item.language} language. Author is from {item.country}
                  </p>
                  <a href={item.link} class="btn btn-primary">
                    Web Link of Book
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }):<p className='text-center text-uppercase '>No Data Matched to this Keyword in Database</p>}
  
  </div>
};
export default Descripiton;
