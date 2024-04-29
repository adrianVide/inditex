import React from "react";

export function Loader(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={12} cy={12} r={0} fill="rgb(8 145 178)">
        <animate
          id="svgSpinnersPulse30"
          fill="freeze"
          attributeName="r"
          begin="0;svgSpinnersPulse32.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="0;11"
        ></animate>
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="0;svgSpinnersPulse32.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        ></animate>
      </circle>
      <circle cx={12} cy={12} r={0} fill="rgb(8 145 178)">
        <animate
          id="svgSpinnersPulse31"
          fill="freeze"
          attributeName="r"
          begin="svgSpinnersPulse30.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="0;11"
        ></animate>
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="svgSpinnersPulse30.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        ></animate>
      </circle>
      <circle cx={12} cy={12} r={0} fill="rgb(8 145 178)">
        <animate
          id="svgSpinnersPulse32"
          fill="freeze"
          attributeName="r"
          begin="svgSpinnersPulse30.begin+0.8s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="0;11"
        ></animate>
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="svgSpinnersPulse30.begin+0.8s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        ></animate>
      </circle>
    </svg>
  );
}
