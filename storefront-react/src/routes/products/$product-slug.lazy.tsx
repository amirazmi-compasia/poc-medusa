import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute, useParams } from "@tanstack/react-router";
import { getProduct } from "./$product-slug";

export const Route = createLazyFileRoute("/products/$product-slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const params = useParams({ from: "/products/$product-slug" });
  const { data } = useQuery<Awaited<ReturnType<typeof getProduct>>>({
    queryKey: [`products_${params["product-slug"]}`],
  });

  console.log(data);

  return <div>{data?.products[0].handle}</div>;
}
