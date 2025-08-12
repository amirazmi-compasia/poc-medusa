import type { StoreProduct } from "@medusajs/types";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { TypographyH4 } from "./ui/typography/h4";
import { Link } from "@tanstack/react-router";

export default function ProductCard(storeProduct: StoreProduct) {
  const { title, options, images, thumbnail, id, handle } = storeProduct;

  return (
    <Link
      to={"/products/$product-slug"}
      className="flex-1"
      params={{ "product-slug": handle }}
    >
      <Card className="pt-0">
        {thumbnail && (
          <CardHeader className="p-0">
            <img className="rounded-t-xl" src={thumbnail ?? ""} alt={title} />
          </CardHeader>
        )}
        <CardContent>
          <TypographyH4>{title}</TypographyH4>
        </CardContent>
        <CardFooter>Price Here</CardFooter>
      </Card>
    </Link>
  );
}
