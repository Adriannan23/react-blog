import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { getCategories } from "../../../redux/categoriesRedux";

const Categories = (props) => {
  const categories = useSelector(getCategories);

  return (
    <div>
      <div className="row" >
        <div className="col-md-3"></div>
        <div className="col-md-5 mb-4">
          <h2>All categories</h2>
          <div className="list-group">
            {categories.map((category) => (
              <Link to={'/categories/' + category} className="list-group-item list-group-item-action"
                key={category}
                style={{ color: 'blue', textDecoration: 'underline' }}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;