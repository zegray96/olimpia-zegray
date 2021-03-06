import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import {convertStringToPascalCase} from "../../utils/convertString";

export default function Item({ itemInfo }) {
  return (
    <>
      <div className="col-12 md:col-6 lg:col-4">
        <div className="card">
          <div className="top">
            <Link to={`/item/${itemInfo.id}`}>
              <div className="imageDiv">
                <img className="imageBackground" src={itemInfo.image_url} />
              </div>
            </Link>
          </div>
          <div className="content">
            <div className="title">{convertStringToPascalCase(itemInfo.title)}</div>
            <div className="price">$ {itemInfo.price}</div>
          </div>
          <div className="bottom">
            <Link to={`/item/${itemInfo.id}`}>
              <Button
                label="Ver Más"
                className="p-button-outlined p-button-info"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
