module.exports = {
  presets: ["@babel/preset-env"], // 자바스크립트의 기능 제공하는 패키지
  plugins: [["@babel/plugin-transform-runtime"]], // async await을 사용할 수 있는 플러그인 설정
};
