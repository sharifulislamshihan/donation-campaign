
const DonatedCard = ({ donated }) => {
    const { id, image, title, category, colors_card, colors_category, colors_write, price } = donated;
    return (
        <div>
            <div style={{ backgroundColor: colors_card }} className="card card-side bg-base-100 shadow-xl ">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-start">
                        <button style={{ backgroundColor: colors_category, color: colors_write }} className="btn btn-sm">{category}</button>
                    </div>
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <p style={{ color: colors_write }} className="text-xl font-semibold">${price}</p>
                    <div className="card-actions justify-start">
                        <button style={{ backgroundColor: colors_write }} className="btn btn-primary text-white font-semibold">View Details </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonatedCard;