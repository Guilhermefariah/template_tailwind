import { Button } from "./components/Button/Button";
import { Heading } from "./components/Heading/Index";

export default function App() {
  return (
    <>
      <div className="bg-dark-background">
        <div className="bg-green-200">
          <Heading color="white">Template of Heading 1</Heading>
          <Heading type="h2" color="white">Template of Heading 2</Heading>
        </div>
        <Button>Primary Background</Button>
        <Button variant="secondary">Secondary Background</Button>
        <Button isBold>Bold Text with Primary Background</Button>
        <Button isBold variant="secondary">
          Bold Text With Secondary Background
        </Button>
      </div>
    </>
  );
}
