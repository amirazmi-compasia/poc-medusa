import { medusaClient } from "@/config/medusa";
import { createFileRoute } from "@tanstack/react-router";

export const getProducts = async () => {
  return await medusaClient.store.product.list();
};

export const Route = createFileRoute("/")({
  loader: async ({ context: { queryClient } }) => {
    await queryClient.prefetchQuery({
      queryKey: ["products"],
      queryFn: getProducts,
    });
  },
});
