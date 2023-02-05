import Head from "next/head";
import About from "../components/About";
import Chef from "../components/chef";
import Hero from "../components/Hero";
import Products from "../components/Products";
import { Reservation } from "../components/Reservation";

const Home = ({ productList }) => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Products productList={productList} />
      <About />
      <Reservation />
      <Chef />
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/customer/public/products");
  const data = await res.json();

  return {
    props: {
      productList: data.result,
    },
  };
}

Home.Layout = "Customer";
export default Home;
