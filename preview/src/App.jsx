import { Button } from "signal-layers";

export default function App() {
  return (
    <div className="items-center justify-center flex h-screen w-screen">
      <Button primary pill hoverLift activeShrink >Hello World</Button>
      <Button secondary rounded hoverShrink activeDepth>Hello World</Button>
    </div>
  );
}