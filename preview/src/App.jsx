import { Button } from 'signals-ui'

export default function App() {
  return (
    <div>
    <button>Click Me</button>
    <Button secondary md pill hoverEnlarge>Click me</Button>
    
    Hey
    <p>This is a test paragraph to verify styling.</p>
    <Button primary lg rounded hoverInvert submitForm>Submit</Button>
    <Button secondary sm rounded hoverInvert confirmOnClick>Delete</Button>
    </div>
  );
}