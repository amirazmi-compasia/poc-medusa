import { medusaClient } from "@/config/medusa";
import { createFileRoute } from "@tanstack/react-router";

export const getProduct = async (handle: string) => {
  return await medusaClient.store.product.list({ handle });
};

export const Route = createFileRoute("/products/$product-slug")({
  params: {},
  loader: async ({ context: { queryClient }, params }) => {
    await queryClient.prefetchQuery({
      queryKey: [`products_${params["product-slug"]}`],
      queryFn: () => getProduct(params["product-slug"]),
    });
  },
});
