import Layout from "../components/Layout";
import "../styles/globals.css";

const MyApp = ({Component, pageProps}) => {
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
        )
}

export default MyApp;


// App Component
// - blueprint 역할
// - 파일이름은 반드시 _app.js
// - Next.js는 Index, About이 렌더링되기 전에 먼저 App을 본다.
// - <NavBar/>는 모든 페이지에 나타난다.

// 일반 페이지 파일에서는 module이 아닌 CSS파일을 불러올 수 없음
// 커스텀 App Component에서는 모든 CSS를 불러올 수 있음