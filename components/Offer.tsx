
const Offer = () => {
    return (
        <div className="bg-[#FAF4F4] flex flex-col md:flex-row justify-evenly items-center h-auto md:h-[300px] p-8 md:p-0">
            <div className="w-full md:w-[376px] h-auto mb-8 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl md:text-[32px] font-medium ">Free Delivery</h3>
                <p className="text-base md:text-xl text-[#9F9F9F]">For all orders over $50, consectetur adipim scing elit.</p>
            </div>
            <div className="w-full md:w-[376px] h-auto mb-8 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl md:text-[32px] font-medium">90 Days Return</h3>
                <p className="text-base md:text-xl text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
            </div>
            <div className="w-full md:w-[376px] h-auto text-center md:text-left">
                <h3 className="text-2xl md:text-[32px] font-medium">Secure Payment</h3>
                <p className="text-base md:text-xl text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
            </div>
        </div>
    );
}

export default Offer;
