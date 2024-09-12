import SearchPart from "@/components/SearchPart";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { query } = router.query;
  return (
    <>
      <SearchPart />
      <h1>검색결과 : {query} </h1>
    </>
  );
}
