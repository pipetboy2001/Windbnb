export default function BoxItem({ item }) {
    return (
        <div className="box_item">
            <div className="box_item_info">
                <h2>{item?.superHost && <span>SUPER HOST</span>}  {item?.type} . {item?.beds} beds</h2>
                <p>  {item?.rating}</p>
            </div>

            <p>{item?.title}</p>

        </div>
    )
}
