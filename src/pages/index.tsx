import SearchPart from "@/components/SearchPart";

export default function Home() {
  // query 입력받기
  // const inputRef = useRef<string | null>(null);
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = e.target.value;
  //   inputRef.current = inputValue;
  // };

  return (
    <>
      <div>
        <SearchPart />
      </div>
    </>
  );
}
