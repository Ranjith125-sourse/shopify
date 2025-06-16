const Header = () => {
    return(
        <header className="bg-white shadow pb-5 pt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-gray-900 cursor-pointer transition-all duration-300 hover:text-[50px] hover:text-purple-500 hover:font-extralight"><span className="text-purple-500 text-[50px] font-extralight">S</span>hopify</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="/" className="text-gray-900 hover:text-purple-500">Home</a>
                        <a href="/products" className="text-gray-900 hover:text-purple-500">Products</a>
                        <a href="/cart" className="text-gray-900 hover:text-purple-500">Cart</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;