const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  // 파일을 읽어 들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  // 결과물(번들)을 변환하는 설정
  output: {
    path: path.resolve(__dirname, "dist"), //resolver()는 경로를 합쳐주는 메서드 , __dirname는 경로를 가르키고 폴더를 생성하는 이름을 두번째인자로 지정하게된다
    filename: "main.js",
    clean: true,
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
