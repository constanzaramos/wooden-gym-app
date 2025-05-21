const ItemListContainer = (props) => {
    return (
        <div className="itemListContainer">
            <h1>{props.greeting}</h1>
            <div className="itemList">
                {props.children}
            </div>
        </div>
    )
}
export default ItemListContainer;