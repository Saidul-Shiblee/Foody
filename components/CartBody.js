import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import useHasMounted from "../hooks/useHasMounted";
import { getItems, getTotal } from "../services/redux/features/cartSlice";

const CartBody = () => {
  const orderTotal = useSelector(getTotal);
  const cartItems = useSelector(getItems);
  // const [hasMounted, setHasMounted] = React.useState(false);
  // React.useEffect(() => {
  //   setHasMounted(true);
  // }, []);
  // if (!hasMounted) {
  //   return null;
  // }

  return (
    <div className="w-full py-20 px-10 flex mt-20">
      <div className=" w-full">
        <p className=" text-2xl text-center">
          Cart is Empty!Please add Some items
        </p>
      </div>
    </div>
  );

  // return (
  //   <div className="w-full py-20 px-10 flex mt-20">
  //     <div className=" w-full">
  //       <p className=" text-2xl text-center">hello</p>
  //     </div>
  //   </div>
  //   // <div className="w-full py-20 px-10 flex mt-20">
  //   //   <div className="w-4/5">
  //   //     <table className="table-auto w-full">
  //   //       <thead className="">
  //   //         <tr className="flex justify-between w-full mb-4">
  //   //           <th className=" w-1/6">Product </th>
  //   //           <th className="w-1/6">Name</th>
  //   //           <th className="w-1/6">Extras</th>
  //   //           <th className="w-1/6">Size</th>
  //   //           <th className="w-1/6">Price</th>
  //   //           <th className="w-1/6">Qunatity</th>
  //   //           <th className="w-1/6">Total</th>
  //   //         </tr>
  //   //       </thead>
  //   //       <tbody className="flex flex-col gap-4 ">
  //   //         {cartItems?.map((item) => (
  //   //           <tr
  //   //             key={item.productId}
  //   //             className="flex justify-between items-center w-full  "
  //   //           >
  //   //             <td className="w-1/6 flex justify-center"></td>
  //   //             <td className="w-1/6 text-center">{item.productName}</td>
  //   //             <td className="w-1/6 text-center">
  //   //               {item.option.join(" , ")}
  //   //             </td>
  //   //             <td className="w-1/6 text-center">{item.size}</td>
  //   //             <td className="w-1/6 text-center">Tk {item.productPrice}</td>
  //   //             <td className="w-1/6 text-center">{item.quantity}</td>
  //   //             <td className="w-1/6 text-center">
  //   //               Tk {item.productPrice * item.quantity}
  //   //             </td>
  //   //           </tr>
  //   //         ))}
  //   //       </tbody>
  //   //     </table>
  //   //   </div>
  //   //   <div className="w-1/5 ">
  //   //     <div className="bg-gray-800/80 p-4 text-white flex flex-col justify-between gap-6">
  //   //       <h3 className="text-2xl font-semibold">Cart Total</h3>
  //   //       <div className="flex flex-col gap-2">
  //   //         <h3 className="font-semibold">Subtotal:{orderTotal}</h3>
  //   //         <h3 className="font-semibold">Discount:{0}</h3>
  //   //         <h3 className="font-semibold">Total:{orderTotal - 0}</h3>
  //   //       </div>
  //   //       <Link
  //   //         href={"./checkout"}
  //   //         className=" w-full text-center px-2 py-1 bg-[#d1411e] rounded-full"
  //   //       >
  //   //         Checkout Now!
  //   //       </Link>
  //   //     </div>
  //   //     {/* {session && (
  //   //       <p
  //   //         className=" w-full text-center px-2 py-1 bg-[#d1411e] rounded-full cursor-pointer"
  //   //         onClick={() =>
  //   //           signOut({
  //   //             callbackUrl: "/",
  //   //           })
  //   //         }
  //   //       >
  //   //         signOut
  //   //       </p>
  //   //     )} */}
  //   //   </div>
  //   // </div>
  // );
};

export default CartBody;
