import { Suspense } from "react";
import { Banner } from "@/components/sections/Banner/Banner";
import { Categories } from "@/components/sections/Categories/Categories";
import { Products } from "@/components/sections/Recomends/Recomends";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

export const metadata = {
  title: "Home | Madlen",
  description: "Welcome to Madlen - Your Fashion Destination",
};

export default function Home() {
  return (
    <div className="bg-[#fffcf4] min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <Products />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Categories />
      </Suspense>
    </div>
  );
}
