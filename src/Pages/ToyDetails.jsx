import useLoadData from "../Hooks/useLoadData";
import { useLocation, useParams } from "react-router";
import Container from "../Components/Container/Container";
import ToyDetailsCard from "../Components/ToyDetails/ToyDetailsCard";
import LoadingComponent from "../Components/Loading/LoadingComponent";
import ToyDetailsForm from "../Components/ToyDetails/ToyDetailsForm";
import { useEffect } from "react";

const ToyDetails = () => {
  const { data, loading } = useLoadData();

  const { id } = useParams();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  if (loading) {
    return <LoadingComponent></LoadingComponent>;
  }
  const findDetails = data.find((e) => e.id == id);


  return (
    <>
      <title>ToyTopia - Toy Details</title>
     <div className="bg-gray-50">
       <Container className=" py-20">
        <ToyDetailsCard findDetails={findDetails}></ToyDetailsCard>

        {/* <ToyDetailsForm></ToyDetailsForm> */}
      </Container>
     </div>
    </>
  );
};

export default ToyDetails;
