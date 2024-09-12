import { useRouter } from "next/router";
import { useRef } from "react";
export default function SearchPart() {
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const navaigateHandler = () => {
    router.push({
      pathname: "/search",
      query: { query: inputRef.current?.value },
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navaigateHandler();
    }
  };
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="검색어를 입력하세요 ..."
        onKeyDown={handleKeyPress}
      />
      <button onClick={navaigateHandler}>검색</button>
    </>
  );
}
