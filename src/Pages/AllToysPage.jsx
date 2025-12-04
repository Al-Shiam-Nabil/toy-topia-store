import React from "react";
import Container from "../Components/Container/Container";
import useLoadData from "../Hooks/useLoadData";
import LoadingComponent from "../Components/Loading/LoadingComponent";
import PopularCard from "../Components/Home/PopularCard";

const AllToysPage = () => {
  const { data, loading } = useLoadData();
  console.log(data);
  return (
 <div className="bg-gray-50">
       <Container className="pb-10">
      {/* search */}
      <form className="flex justify-center  pt-10  ">
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

        <select defaultValue="Pick a color" className="select">
          <option disabled={true}>Pick a color</option>
          <option>Crimson</option>
          <option>Amber</option>
          <option>Velvet</option>
        </select>
      </div>

      {
        loading ? <LoadingComponent></LoadingComponent> : <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-7 my-10">{ data.map(toy=><PopularCard key={toy.id} toy={toy}></PopularCard>)}</div>
      }

    {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-7 my-10">
          {
        loading ? <LoadingComponent></LoadingComponent> : data.map(toy=><PopularCard key={toy.id} toy={toy}></PopularCard>)
      }
    </div> */}
    </Container>
 </div>
  );
};

export default AllToysPage;
