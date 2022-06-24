import { useState } from "react";
import NavBar from "../components/NavBar";

const Home = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <NavBar/>
            <h1>Hello {counter}</h1>
            <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
        </div>
    )
}

// HTML은 pre-rendering된다.
// 인터넷 연결 속도가 느리거나 JavaScript가 비활성화되어있어도 화면이 보임!

// 1. 초기 상태를 활용해서 HTML이 pre-rendering 된다.
// 2. Next.js는 HTML을 페이지의 소스코드 안에 넣어 준다.
// 3. react.js가 로딩된 후 상호작용이 일어나면 연결이 되면서, react.js 앱이 된다.
// 이렇게 react.js를 프론트엔드 안에서 실행하는 것을 "Hydration"이라 한다 !

export default Home;