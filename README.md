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

[x] html plugin 설치 및 코드작성

- npm i -D html-webpack-plugin
- plugins: [
  new HtmlPlugin({
  template: "./index.html",
  }),
  ],

  devServer: {
  host: "localhost",
  },

[x] image plugin 설치 및 코드 작성

- npm i -D copy-webpack-plugin
  plugins: [
  new HtmlPlugin({
  template: "./index.html",
  }),
  new CopyPlugin({
  patterns: [{ from: "static" }], // 파일을 복사해서 결과물에 합쳐주는 메서드
  }),
  ],

[x] css, style loader 설치 및 코드 작성

- npm i -D css-loader style-loader
  module: {
  rules: [
  {
  test: /\.css$/, // .css를 찾는다
  use: [
  "style-loader", // index.html에서 style태그에 해석한 파일을 삽입해주는 패키지
  "css-loader", // 자바스크립트에서 css를 해석하기위한 패키지
  ],
  },
  ],
  },

[x] scss 해석하기위한 패키지 설정 및 코드 작성

- npm i -D sass-loader sass
  module: {
  rules: [
  {
  test: /\.s?css$/, // .css를 찾는다
  use: [
  "style-loader", // index.html에서 style태그에 해석한 파일을 삽입해주는 패키지
  "css-loader", // 자바스크립트에서 css를 해석하기위한 패키지
  "sass-loader",
  ],
  },
  ],
  },

[x] postcss autoprefixer 설치 및 코드작성

- 공급업체 접두사를 적용하기위한 패키지 설치
- npm i -D postcss autoprefixer postcss-loader

- package.json에 하단에 설정해준다
  - 이 설정은 현재의 프로젝트가 어떠한 브라우저를 지원하는지 설정하는것이다
    "browserslist": [
    "> 1%", // 이 세상에서 1%이상의 브라우저에서
    "last 2 versions" // 마지막 2개의 버전을 지원한다라고 설정한다
    ]
  - 결과
    display: -webkit-box; 접두사가 적용된 모습을 볼수있다
    display: -ms-flexbox;
    display: flex;
- .postcssrc.js 파일생성 하여 코드작성
  module.exports = {
  plugins: [require("autoprefixer")],
  };

[x] babel 설정 및 코드 작성

- npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime
- npm i -D babel-loader
- babelrc.js 파일 생성하여 코드작성
  module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [["@babel/plugin-transform-runtime"]],
  };
