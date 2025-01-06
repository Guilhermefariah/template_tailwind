import { CalendarFeature } from "./components/CalendarFeature";
import { Testimonials } from "./components/Testimonials";

export default function App() {
  return (
    <>
      <div className="bg-dark-background">
        <Testimonials />
        <CalendarFeature />
      </div>
    </>
  );
}
