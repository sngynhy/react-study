import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

// 화씨 => 섭씨
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
// 섭씨 => 화씨
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return "";

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Calculator(props) {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  function handleCelsiusChange(temperature) {
    setTemperature(temperature);
    setScale("c");
  }

  function handleFahrenheit(temperature) {
    setTemperature(temperature);
    setScale("f");
  }

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <h1>Sheared State</h1>
      <h3>✔ 하위 컴포넌트에서 State 공유하기</h3>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheit}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );

  // component
  function BoilingVerdict(props) {
    if (props.celsius >= 100) return <p>🚨 물이 끓습니다. 🚨</p>;
    return <p>물이 끓지 않습니다.</p>;
  }
}
export default Calculator;
