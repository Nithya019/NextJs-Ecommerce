import ThumbNail from "@/app/ui/components/thumbNail";
import ProductView from "@/app/ui/components/productView";
import { getProduct } from "@/app/services/dataServices";
import { ProductInterface } from "@/app/interfaces/productInterfaces";

export default function SunGlass() {
  const productList: ProductInterface[] = getProduct();
  return (
    <>
      <ThumbNail image="sunglassThumbNail.jpg" />
      <div className="p-8">
        <h1 className="text-lg pb-6">Choose Your Style</h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productList.map(
            (product: ProductInterface) =>
              product.type === "sunglasses" && (
                <ProductView key={product.id} product={product} />
              )
          )}
        </div>
      </div>
    </>
  );
}
