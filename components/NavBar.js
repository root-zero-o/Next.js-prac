import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {

    const router = useRouter();
    console.log(router)  // location에 대한 정보가 나온다 !
    return (
        <nav>
        <Link href="/">
            <a style={{color: router.pathname === "/" ? "red" : "blue"}}>Home</a>
        </Link>
        <Link href="/about">
            <a style={{color: router.pathname === "/about" ? "red" : "blue"}}>About</a>
        </Link>
    </nav>
    )
}

export default NavBar;

// Link : client-side navigation을 제공해준다.

// useRouter(next.js hook)
// 현재 location에 관한 정보를 얻을 수 있다.