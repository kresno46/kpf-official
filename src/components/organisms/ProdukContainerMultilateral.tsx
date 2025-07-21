import ProductCard from "@/components/moleculs/ProductCard";

const products = [
    { title: "Kontrak Berjangka Olein (OLE)", category: "multilateral", slug: "ole" },
    { title: "Kontrak Berjangka Emas (GOL)", category: "multilateral", slug: "gol" },
    { title: "Kontrak Berjangka Emas 250 Gram (GOL250)", category: "multilateral", slug: "gol250" },
];

export default function ProdukContainerMultilateral() {
    return (
        <div className="">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        title={product.title}
                        image={`https://placehold.co/400`}
                        category={product.category}
                        slug={product.slug}
                    />
                ))}
            </div>
        </div>
    );
}
