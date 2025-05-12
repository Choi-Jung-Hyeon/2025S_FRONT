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
      <div className="item" onClick={props.onClick}>
          <img src={props.image} className="item-img" />
          <div className="item-info">
              <h2 className="item-h2">{props.name}</h2>
              <p className="item-p">height: {props.height}dm</p>
              <p className="item-p">weight: {props.weight}hg</p>
              <p className="item-p">types: {props.types.join(", ")}</p>
          </div>
      </div>
    );
  }