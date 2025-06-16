

const Card = (props) => {
    const { data } = props;
    console.log(data);

    return(
        <>
            <div className="card-container w-[20%] bg-white shadow-lg rounded-2xl p-4 pb-10 m-2 relative transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="img w-[55%] h-[65%] mx-auto overflow-hidden relative">
                    <img className="w-full h-full object-contain" src={data.image} alt={data.title} />
                </div>
                <div className="details mt-4 mx-auto ">
                    <strong>{data.title}</strong>
                    <p>₹ {Math.floor(data.price)} </p>
                    <p>{data.category}</p>
                    <div className="flex justify-end absolute bottom-3 right-2 items-end">
                    <button className="add-to-cart bg-purple-500 text-white px-2 py-1  rounded-xl hover:bg-purple-600 mt-2">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;