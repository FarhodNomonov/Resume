function Loader() {
  return (
    <div className="loader">
      <style>
        {`
        .loader {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          backdrop-filter: blur(10px);
        }
        .loader_content {
          transform: rotateZ(45deg);
          perspective: 1000px;
          border-radius: 50%;
          width: 70px;
          height: 70px;
          color: #fff;
        }
          .loader_content:before,
          .loader_content:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: inherit;
            height: inherit;
            border-radius: 50%;
            transform: rotateX(70deg);
            animation: 1s spin linear infinite;
          }
          .loader_content:after {
            color: #FF3D00;
            transform: rotateY(70deg);
            animation-delay: .4s;
          }
  
        @keyframes rotate {
          0% {
            transform: translate(-50%, -50%) rotateZ(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotateZ(360deg);
          }
        }
  
        @keyframes spin {
          0%,
          100% {
            box-shadow: .2em 0px 0 0px currentcolor;
          }
          12% {
            box-shadow: .2em .2em 0 0 currentcolor;
          }
          25% {
            box-shadow: 0 .2em 0 0px currentcolor;
          }
          37% {
            box-shadow: -.2em .2em 0 0 currentcolor;
          }
          50% {
            box-shadow: -.2em 0 0 0 currentcolor;
          }
          62% {
            box-shadow: -.2em -.2em 0 0 currentcolor;
          }
          75% {
            box-shadow: 0px -.2em 0 0 currentcolor;
          }
          87% {
            box-shadow: .2em -.2em 0 0 currentcolor;
          }
        }
     
        @keyframes lds-roller {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        `}
      </style>
      <span className="loader_content"></span>
    </div>
  );
}

export default Loader;
