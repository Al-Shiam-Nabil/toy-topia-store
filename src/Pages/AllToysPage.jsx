import React, { useEffect } from "react";
import Container from "../Components/Container/Container";
import useLoadData from "../Hooks/useLoadData";
import LoadingComponent from "../Components/Loading/LoadingComponent";
import PopularCard from "../Components/Home/PopularCard";
import { useLocation } from "react-router";
import { toast } from "react-toastify";

const AllToysPage = () => {
  const { data, setData, loading,backupData } = useLoadData();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  

  const handleSearch = (e) => {
    e.preventDefault();
    const searchWord = e.target.search.value.trim().toLowerCase();
    if (searchWord.length === 0) {
      toast.error("Please enter valid text.");
      return;
    }

    const searchToy = backupData.filter((e) =>
      e.name.toLowerCase().includes(searchWord)
    );

 

    if (searchWord) {
      setData(searchToy);
    } else {
      setData(data);
    }
  };



  const handleSort = (e) => {
    const sortBy = e.target.value;
    if (sortBy === "price_asc") {
      setData([...data].sort((a, b) => a?.price - b?.price));
    }

if (sortBy === "price_dsc") {
      setData([...data].sort((a, b) => b?.price - a?.price));
    }
  };

 

  return (
    <div className="bg-gray-50">
      <Container className="pb-10">
        {/* search */}
        <form onSubmit={handleSearch} className="flex justify-center  pt-10  ">
          <div className="relative h-[45px] mb-5">
            <input
              type="text"
              name="search"
              placeholder="Search By Name..."
              spellCheck={false}
              className="bg-gray-200 w-full sm:w-[400px] px-5 pr-24 py-2 rounded-4xl h-full outline-none "
              required
            />
            <button
              type="submit"
              className="btn bg-gray-200 hover:bg-gray-300  text-primary shadow-none rounded-br-4xl rounded-tr-4xl absolute top-0 right-0 h-full"
            >
              Search
            </button>
          </div>
        </form>

        <div className="flex justify-center flex-col-reverse sm:flex-row sm:justify-between items-center gap-x-20 gap-y-3 flex-wrap">
          <h3 className="text-xl font-semibold whitespace-nowrap">
            All Toys ({data?.length})
          </h3>

          <select
            onChange={handleSort}
            defaultValue="default"
            className="select"
          >
            <option value="default" disabled={true}>Sort by price</option>
            <option value="price_dsc">Price High to Low</option>
            <option value="price_asc">Price Low to High</option>
          </select>
        </div>

        {loading ? (
          <LoadingComponent></LoadingComponent>
        ) : data?.length === 0 ? (
          <div className="grid place-items-center py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-500">
              No Result Found.
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-7 my-10">
            {data.map((toy) => (
              <PopularCard key={toy.id} toy={toy}></PopularCard>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default AllToysPage;
