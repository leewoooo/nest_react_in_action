import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      /**
       * 개발을 위한 Server Proxy 규칙을 구성한다.
       * 개발을 할 때 NestJs의 서버를 키고, React 서버도 켜 두 서버의 HotReload를 이용하기 위해서 이다.
       * * /api로 시작하는 API에 대한 규칙을 정의한다. (prefix가 "/api"로 시작하는 모든 요청은 해당 Proxy 설정을 타게 된다.)
       */
      "/api": {
        target: "http://localhost:3000", // local Nest app
        changeOrigin: true,
      },
    },
  },
});
