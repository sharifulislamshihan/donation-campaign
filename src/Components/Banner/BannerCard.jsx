
const BannerCard = ({donate}) => {
    const{image, title, category, colors_card, colors_category, colors_write} = donate;

    const bgCardColor = `bg-${colors_card}`;
    return (
        <div className="mx-auto">
            <div style={{backgroundColor:colors_card}} className="card card-compact shadow-xl">
                <figure><img className="w-full" src={image} alt={category} /></figure>
                <div className="card-body mt-2">
                    <div className="card-actions justify-start">
                        <button style={{backgroundColor:colors_card, color:colors_write}} className="btn">{category}</button>
                    </div>
                    <h2 style={{color:colors_write}} className="card-title text-xl font-semibold mt-2">{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;