import { useParams, Link } from "react-router-dom";

const Description = () => {
  const { id } = useParams();

  let arry = JSON.parse(localStorage.getItem("products"));
  const filterVal = arry.filter((item) => {
    return item.id == id;
  });
  console.log(filterVal);

  return (
    <div className="row">
      {filterVal.map((item) => {
        return (
          <>
            <div className="col-lg-4 offset-2">
              <img
                className="img-fluid img-thumbnail rounded mt-5"
                style={{ height: "400px", width: "400px" }}
                src={item.image}
                alt="Image Shared"
              />
            </div>
            <div className="col-lg-5 ">
              <table class="table mt-3 table-hover table-responsive table-primary opacity-75">
                <thead className=" text-center text-uppercase">
                  <tr>
                    <th colSpan="2" scope="col">
                      Product Details
                    </th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: "justify" }}>
                  <tr>
                    <th className="text-uppercase" scope="row">
                      Item Category
                    </th>
                    <td>{item.category}</td>
                  </tr>
                  <tr>
                    <th className="text-uppercase" scope="row">
                      Item Name
                    </th>
                    <td>{item.title}</td>
                  </tr>
                  <tr>
                    <th className="text-uppercase" scope="row">
                      Item Description
                    </th>
                    <td className="">{item.description}</td>
                  </tr>
                  <tr>
                    <th className="text-uppercase" scope="row">
                      Item Rating
                    </th>
                    <td>{item.rating.rate}</td>
                  </tr>
                  <tr>
                    <th className="text-uppercase" scope="row">
                      Item Price
                    </th>
                    <td>{item.price}</td>
                  </tr>
                  <tr className="text-end">
                    <td colSpan="2">
                      {/* <Link  className='btn btn-primary me-5' to={`/cart/${id}/`}>Add To Cart</Link>  */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Description;
