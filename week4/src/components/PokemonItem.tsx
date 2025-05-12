import { Link } from "react-router-dom";

interface Pokemon {
    id: string;
    img: string; 
    name: string;
    height: string;
    weight: string;
    types: any;
}

export default function PokemonItem(props: any) {
    return (
      <Link to={`/detail/${props.id}`} className="Linkitem">
        <div className="item">
            <img src={props.image} className="item-img" />
            <div className="item-info">
                <h2 className="item-h2">{props.name}</h2>
                <p className="item-p">height: {props.height}dm</p>
                <p className="item-p">weight: {props.weight}hg</p>
                <p className="item-p">types: {props.types.join(", ")}</p>
            </div>
        </div>
      </Link>
    );
  }