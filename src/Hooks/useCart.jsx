import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user, loading } = useContext(AuthContext);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://sports-arena-server.vercel.app/carts?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [cart, refetch];
};
export default useCart;
