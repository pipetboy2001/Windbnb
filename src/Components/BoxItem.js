import '../Styles/boxItem.css'
export default function BoxItem({ item }) {
    return (
        <div className="box-item"> 
            <div>
                <h2>
                    {item.superHost && <span>SUPER HOST</span>} {item.type} .{" "}
                    {item.beds} Camas
                </h2>
                <p>{item.rating}</p>
            </div>
            <p>{item.title}</p>
        </div>
    );
}
