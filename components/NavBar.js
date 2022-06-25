import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {

    const router = useRouter();
    console.log(router)  // location에 대한 정보가 나온다 !
    return (
        <nav>
        <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <style jsx>{`
            a {
                text-decoration: none;
            }
            .active {
                color: tomato;
            }
        `}</style>
    </nav>
    )
}

export default NavBar;

// Link : client-side navigation을 제공해준다.

// 1. useRouter(next.js hook)
// 현재 location에 관한 정보를 얻을 수 있다.

// 2. CSS Modules
// 자바스크립트 object의 property 형식으로 적는다.
// class 이름이 랜덤한 text로 들어가기 때문에 충돌이 일어나지 않는다.
// 다른 컴포넌트에서도 nav라는 class이름을 사용할 수 있다 !
// 2-1 ) 두개의 class를 넣고 싶다면 ? 특정 문자열을 만들어서 삽입한다.

// 3. styles jsx
// 컴포넌트별로 독립되어 있다.
// 이것도 역시 class이름이 랜덤한 text로 들어감