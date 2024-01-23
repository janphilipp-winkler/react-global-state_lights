import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  const [allLightsOff, setAllLightsOff] = useState(true);

  function handleToggleLight(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleSetLight(event) {
    if (event.target.id === "off") {
      setLights(
        lights.map((light) => (light.isOn ? { ...light, isOn: false } : light))
      );
    }
    if (event.target.id === "on") {
      setLights(
        lights.map((light) => (!light.isOn ? { ...light, isOn: true } : light))
      );
    }
  }

  useEffect(() => {
    setAllLightsOff(lights.every((light) => !light.isOn));
  }, [lights]);

  return (
    <Layout isDimmed={allLightsOff}>
      <GlobalStyle />
      <Component
        onSetLights={handleSetLight}
        allLightsOff={allLightsOff}
        onToggleLight={handleToggleLight}
        lights={lights}
        {...pageProps}
      />
    </Layout>
  );
}
