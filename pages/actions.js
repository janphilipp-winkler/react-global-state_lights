import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ lights, allLightsOff, onSetLights }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onSetLights={onSetLights}
        allLightsOff={allLightsOff}
        lights={lights}
      />
    </>
  );
}
