import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const Home = () => {

    const [movies, setMovies] = useState();
    useEffect(() => {
        (async () => {
            const {results} = await ( 
                await fetch('/api/movies')).json();
        setMovies(results);
        })();
    },[]);

    return (
        <div className="container">
            <Seo title="Home"/>
            {!movies && <h4>Loading ...</h4>}
            {movies?.map(movie => (
                <div className="movie" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
            <style jsx>{`
                .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 20px;
                }
                .movie img {
                max-width: 100%;
                border-radius: 12px;
                transition: transform 0.2s ease-in-out;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                font-size: 18px;
                text-align: center;
                }
             `}</style>
        </div>
    )
}

export default Home;

// HTML은 pre-rendering된다.
// 인터넷 연결 속도가 느리거나 JavaScript가 비활성화되어있어도 화면이 보임!

// 1. 초기 상태를 활용해서 HTML이 pre-rendering 된다.
// 2. Next.js는 HTML을 페이지의 소스코드 안에 넣어 준다.
// 3. react.js가 로딩된 후 상호작용이 일어나면 연결이 되면서, react.js 앱이 된다.
// 이렇게 react.js를 프론트엔드 안에서 실행하는 것을 "Hydration"이라 한다 !

