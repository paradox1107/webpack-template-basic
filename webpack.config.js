const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // 파일을 읽어 들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  // 결과물(번들)을 변환하는 설정
  output: {
    path: path.resolve(__dirname, "dist"), //resolver()는 경로를 합쳐주는 메서드 , __dirname는 경로를 가르키고 폴더를 생성하는 이름을 두번째인자로 지정하게된다
    filename: "main.js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.s?css$/, // .css를 찾는다
        use: [
          // 작성 순서가 중요하다 아래부터 패키지를 읽어온다--
          "style-loader", // index.html에서 style태그에 해석한 파일을 삽입해주는 패키지
          "css-loader", // 자바스크립트에서 css를 해석하기위한 패키지
          "postcss-loader", // css에 공급업체 접두사를 적용하기위한 패키지
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        use: [
          "babel-loader", // 웹팩이 해석하기 위해 바벨로더로 읽어들여 바벨을 적용할수 있도록 패키지를 설정
        ],
      },
    ],
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }], // 파일을 복사해서 결과물에 합쳐주는 메서드
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
