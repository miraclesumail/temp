// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        transform-origin: 0 0;
        transform: scale(0.5, 0.5);
      }
    </style>
  </head>
  <body>
    <!-- <input type="file" id="fileinput">
    <img src="" alt="">

     -->
    <canvas width="300" height="300"></canvas>
    <!-- <script src="./app.js"></script> -->

    <script>
      const canvas = document.querySelector("canvas");
      const ctx = canvas.getContext("2d");
      ctx.lineWidth = 10;
      function drawCanvas(x, y, r, sRadian, eRadian, color) {
        ctx.strokeStyle = color;

        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.arc(x, y, r, sRadian, eRadian, false);
        ctx.stroke();
      }

      drawCanvas(150, 150, 140, -Math.PI / 2, Math.PI * 1.5, "grey");
      // drawCanvas(150, 150, 140, -Math.PI / 2, Math.PI / 2, "green");

      // 开始创建新路径
      // context.beginPath();
      // // 创建一个半圆圆弧
      // context.arc(150, 150, 140, -Math.PI / 2, Math.PI * 1.5, false);
      // // 调用 stroke 绘制该路径
      // context.stroke();

      // context.strokeStyle = "green";

      // context.beginPath();
      // // 创建一个半圆圆弧
      // context.arc(150, 150, 140, -Math.PI / 2, Math.PI / 2, false);
      // // 调用 stroke 绘制该路径
      // context.stroke();
      let index = 1;
      setInterval(() => {
        ctx.clearRect(0, 0, 300, 300);
        drawCanvas(150, 150, 140, -Math.PI / 2, Math.PI * 1.5, "grey");
        drawCanvas(
          150,
          150,
          140,
          -Math.PI / 2,
          -Math.PI / 2 + (Math.PI / 8) * index++,
          "green"
        );
      }, 500);
    </script>
  </body>
</html>
