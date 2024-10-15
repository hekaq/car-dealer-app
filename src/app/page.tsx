import { DropDownFetch } from "@/components/DropDownFetch/DropDownFetch";
import { Loading } from "@/components/Loading/Loading";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="flex justify-center gap-4">
      <Suspense fallback={<Loading />}>
        <DropDownFetch />
      </Suspense>
    </div>
  );
}
