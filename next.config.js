/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY; // key를 숨긴다. .env에서 확인 가능
                                    // .env는 반드시 gitignore에 추가한다.

const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: "/old-blog/:path*",  // 여기로 들어가면
        destination:"/new-sexy-blog/:path*",  // 여기로 연결이 된다.(URL이 바뀌는걸 유저가 볼 수 있음)
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        // rewrites는 유저가 url이 바뀌는 것을 알 수 없다.
        // key값이 나오는 url을 숨길 수 있다.
      }
    ]
  }
}

module.exports = nextConfig
