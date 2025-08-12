import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { getProducts } from ".";
import ProductCard from "@/components/product-card";
import type { StoreProduct } from "@medusajs/types";

export const Route = createLazyFileRoute("/")({
  component: Component,
});

function Component() {
  const { data } = useQuery<Awaited<ReturnType<typeof getProducts>>>({
    queryKey: ["products"],
  });

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="flex gap-4">
        {data?.products.map((product: StoreProduct) => {
          return <ProductCard {...product} />;
        })}
      </div>
    </div>
  );
}
