import { Card, Spinner, ProgressBar, Button, Dropdown, FabMenu, Dialog } from "signal-layers";
import { useState } from "react";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const img = "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg";
  return (
    <div className="items-center justify-center flex h-screen w-screen p-8">
      {/* <Card
        title="Build once. Think less."
        description="A calm UI system driven by contracts, not chaos."
        image={img}
        buttonLabel="Explore More"
        onButtonClick={() => alert("Button clicked")}
        interactive
      /> */}
      {/* <Button neumorphism xl hoverLift>Button</Button> */}
      {/* <ProgressBar value={50} success lg/> */}
      {/* <Spinner transparent /> */}
      
      {/* <Dropdown 
        items={[
            { label: "Item 1", path: "/item-1" },
            { label: "Item 2", path: "/item-2" },
            { label: "Item 3", path: "/item-3" }
        ]} 
        isOpen={opened}
        menuName="Click me"
        onMenuClick={() => setOpened(!opened)}
        onItemSelect={(item) => {
            alert(`Navigating to: ${item.path}`);
            setOpened(false);
        }}
      /> */}

    {/* <Carousel 
      items={[
            <div className="h-40 bg-blue-100">Slide 1</div>,
            <div className="h-40 bg-green-100">Slide 2</div>,
            <div className="h-40 bg-red-100">Slide 3</div>
        ]}
      activeIndex={activeIndex}
      onIndexChange={setActiveIndex}
      showControls
    /> */}

    </div>
  );
}


