import { useEffect, useState } from "react";
import Card from "./Card";


const Container = () => {
    const [allData, setAllData] = useState([]);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState([]);


    useEffect(()=>{
        handleData();
    }, []);

    async function handleData() {
        setLoading(true);
        const data = await fetch('https://fakestoreapi.com/products');
        const json = await data.json();
        setData(json);
        setAllData(json);
        setLoading(false);
        setCategory(['all', ...new Set(json.map((item) => item.category))]);
    }

    const handleSubmit = () => {
        if(search.trim() === '') {
            setData(allData);
        }
        else {
            const filteredData = allData.filter((item) => {
                return item.title.toLowerCase().includes(search.toLowerCase());
            })
            setData(filteredData);
        }
        setSearch('');
    }

    return(
        <>
            <div className="flex justify-center items-center mt-10">
                <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search" className="w-[30%] p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500" />
                <button className="ml-2 px-4 py-2 bg-purple-500 text-white rounded-2xl hover:bg-purple-600" onClick={() => handleSubmit()}>Search</button>
                <select className="ml-2 px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer" onChange={(e) => {
                    if(e.target.value === 'all') {
                        setData(allData);
                    }
                    else {
                        const filteredData = allData.filter((item) => {
                            return item.category === e.target.value;
                        })
                        setData(filteredData);
                    }
                    }}
                    >
                    {category.map((item, index)=>{
                        return <option key={index} value={item}>{item}</option>
                    })}
                </select>
            </div>
            {
                loading && <div className="flex justify-center items-center mt-10">
                    <div className="loader w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            }
            <section className="flex flex-wrap justify-center mt-10 section">
            {
                data.map((item) => {
                    return <Card key={item.id} data={item} />
                })
            }
            </section>
        </>
    );
}

export default Container;