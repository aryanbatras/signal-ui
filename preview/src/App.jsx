import { Button } from "signal-layers";
import { useState } from "react";

export default function App() {
  return (
    <div className="items-center justify-center flex h-screen w-screen gap-2 p-8">
        {/* <Switch label="Hello"/> */}
        <Button ripple>Hello World</Button>
    </div>
  );    
}
