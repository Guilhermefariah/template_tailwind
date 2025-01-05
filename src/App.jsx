import { Button } from "./components/Button/Button";

export default function App() {
  return (
    <>
      <main className="bg-dark-background">
        <h1 className="text-dark-background">Template Tailwind</h1>
        <Button>Primary Background</Button>
        <Button variant="secondary">Secondary Background</Button>
        <Button isBold>Bold Text with Primary Background</Button>
        <Button isBold variant="secondary">Bold Text With Secondary Background</Button>
      </main>
    </>
  );
}
