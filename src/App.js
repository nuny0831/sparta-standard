import { useState } from "react";
import "./App.css";

function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState(""); // input을 위한 value

  const hanldeForEach = function () {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index}: ${item} / `;
    });

    setResult(temp);
  };

  const handleFilter = function () {
    const filtered = array.filter((item) => item.includes(query));
    setResult(filtered.join(", "));
  };

  const handleMap = function () {
    const mapped = array.map(function (item, index) {
      return item.toUpperCase();
    });
    console.log(mapped);
    setResult(mapped.join(", "));
  };

  const handleReduce = function () {
    const reduced = array.reduce(function (acc, cur) {
      return `${acc} + ${cur}`;
    });
    setResult(reduced);
  };

  const handlePush = function () {
    if (query.length <= 0) {
      alert(`추가하시려는 값을 입력해주세요.`);
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = function () {
    // 1. 원본 배열을 통해 pop 한 값을 저장함(임시변수에)
    const newArr = [...array];
    newArr.pop();
    // 2. setArray
    setArray(newArr);
    // 3. array를 기반으로 result 생성
    setResult(newArr.join(", "));
  };

  const handleSlice = function () {
    const newArr = [...array];
    // 슬라이스 두번째 인자는 결과값을 포함하지 않음.
    const sliced = newArr.slice(1, 4);
    setArray(newArr);
    setResult(sliced.join(", "));
  };

  const handleSplice = function () {
    const newArr = [...array];
    const spliced = newArr.splice(2, 2);
    setArray(newArr);
    setResult(spliced.join(", "));
  };

  const handleIndexOf = function () {
    const indexof = array.indexOf(query);
    setResult(indexof);
  };

  const handleIncludes = function () {
    const include = array.includes(query);
    setResult(include ? "true" : "false");
  };

  const handleFind = function () {
    const found = array.find((item) => item.includes(query));
    setResult(found);
  };

  const handleSome = function () {
    const some = array.some((item) => item.includes(query));
    setResult(some ? "true" : "false");
  };

  const handleEvery = function () {
    const every = array.every((item) => item.length >= 2);
    setResult(every ? "true" : "false");
  };

  const handleSort = function () {
    array.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      if (a === b) return 0;
    });
    setResult(array.join(", "));
  };

  const handleJoin = function () {
    setResult(array.join(", "));
  };

  return (
    <div class="box">
      <h1>Standard반 배열 API 테스트</h1>
      <input placeholder="Enter text"
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />
      <div class="button">
        <button onClick={hanldeForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div class="original">
        <h4>원본배열 :</h4>
        <p>{array.join(",")}</p>
      </div>
      <div class="result">
      <h4>결과물 :</h4>
      <p>{result}</p>
      </div>
    </div>
  );
}
export default App;
