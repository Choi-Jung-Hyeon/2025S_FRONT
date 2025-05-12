export default function PokemonTitle(props:any){
    return (
        <div className="under">
            <h1 className="titleText" onClick={props.onClick}>
               Pokemon List
            </h1>
        </div>
    );
}