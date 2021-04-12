## webpack

- https://webpack.js.org

## setup

[x] package.json 설치 및 webpack 설치

- npm init -y
- npm i -D webpack webpack-cli webpack-dev-server@next
  "scripts": {
  "dev": "webpack-dev-server --mode development",
  "build": "webpack --mode production"
  },

  - "webpack-cli": "^4.6.0", // 커맨드라인 인터페이스 터널에서 입력하는 명령어

[x] entry, output 코드작성

- module.exports = {
  // 파일을 읽어 들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  // 결과물(번들)을 변환하는 설정
  output: {
  path: path.resolve(**dirname, "dist"), //resolver()는 경로를 합쳐주는 메서드 , **dirname는 경로를 가르키고 폴더를 생성하는 이름을 두번째인자로 지정하게된다
  filename: "main.js",
  clean: true,
  },
  };

[x] plugin 설치 및 코드작성

- npm i -D html-webpack-plugin
- plugins: [
  new HtmlPlugin({
  template: "./index.html",
  }),
  ],

  devServer: {
  host: "localhost",
  },
