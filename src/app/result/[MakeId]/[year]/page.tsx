import { FC, Suspense } from "react";
import { Loading } from "@/components/Loading/Loading";
import { ModelsList } from "@/components/ModelsList/ModelsList";

interface Props {
  params: {
    year: number;
    MakeId: number;
  };
}

const Page: FC<Props> = async ({ params }) => {

  return (
    <Suspense fallback={<Loading />}>
      <ModelsList MakeId={params.MakeId} year={params.year} />
    </Suspense>
  );
};

export default Page;
