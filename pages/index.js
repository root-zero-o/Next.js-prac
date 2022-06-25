import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

const Home = ({results}) => {

    const router = useRouter();

    const onClick = (id, title) => {
        router.push(`/movies/${title}/${id}`);
    }

    return (
        <div className="container">
            <Seo title="Home"/>
            {results?.map(movie => (
                
                        <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                            <h4>
                                <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                                    <a>{movie.original_title}</a>
                                </Link>
                            </h4>
                        </div>
            ))}
            <style jsx>{`
                .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 20px;
                }
                .movie {
                    cursor: pointer;
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

export async function getServerSideProps() {
    // 여기에 작성한 코드는 서버에서 돌아간다.
    const {results} = await (await fetch('http://localhost:3000/api/movies')).json();
    return {
        props : {
            results,
        }
    }
}

// HTML은 pre-rendering된다.
// 인터넷 연결 속도가 느리거나 JavaScript가 비활성화되어있어도 화면이 보임!

// 1. 초기 상태를 활용해서 HTML이 pre-rendering 된다.
// 2. Next.js는 HTML을 페이지의 소스코드 안에 넣어 준다.
// 3. react.js가 로딩된 후 상호작용이 일어나면 연결이 되면서, react.js 앱이 된다.
// 이렇게 react.js를 프론트엔드 안에서 실행하는 것을 "Hydration"이라 한다 !

