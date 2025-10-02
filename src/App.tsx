import "./App.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SumToN } from "./features/sumToN";
import { FancyForm } from "./features/fancyForm";
import { MessyReact } from "./features/messyReact";

function App() {
  return (
    <>
      <nav className="p-4 border-b">
        <p className="text-xl text-center">Cang Pham's Test</p>
      </nav>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Problem 1: Three ways to sum to n</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance px-4">
            <SumToN />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Problem 2: Fancy Form</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance px-4">
            <FancyForm />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Problem 3: Messy React</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance px-4">
            <MessyReact />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default App;
