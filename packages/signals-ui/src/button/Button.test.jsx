import { Button } from './Button'

// Test examples demonstrating the Enterprise Button capabilities
export function TestExamples() {
  return (
    <div className="p-8 space-y-4">
      {/* Primary buttons */}
      <Button primary solid md>Primary Solid</Button>
      <Button primary outline md>Primary Outline</Button>
      <Button primary ghost md>Primary Ghost</Button>
      
      {/* Semantic variations */}
      <Button success solid md>Success</Button>
      <Button warning solid md>Warning</Button>
      <Button danger solid md>Danger</Button>
      
      {/* Size variations */}
      <Button primary solid xs>Extra Small</Button>
      <Button primary solid sm>Small</Button>
      <Button primary solid md>Medium</Button>
      <Button primary solid lg>Large</Button>
      
      {/* Shape variations */}
      <Button primary solid md square>Square</Button>
      <Button primary solid md rounded>Rounded</Button>
      <Button primary solid md pill>Pill</Button>
      
      {/* Layout variations */}
      <Button primary solid md block>Block Button</Button>
      
      {/* Behavioral variations */}
      <Button primary solid md hoverMotion>Hover Motion</Button>
      <Button primary solid md pressMotion>Press Motion</Button>
      
      {/* State variations */}
      <Button primary solid md disabled>Disabled</Button>
      <Button primary solid md loading>Loading</Button>
      <Button primary solid md active>Active</Button>
      
      {/* Composition */}
      <Button primary solid md hasIcon>With Icon</Button>
      <Button primary solid md iconOnly>Icon Only</Button>
      
      {/* Contextual */}
      <Button primary solid md block login>Login</Button>
      
      {/* Complex combinations */}
      <Button 
        primary 
        solid 
        lg 
        pill 
        block 
        hoverMotion 
        hasIcon
      >
        Login with Google
      </Button>
    </div>
  )
}
