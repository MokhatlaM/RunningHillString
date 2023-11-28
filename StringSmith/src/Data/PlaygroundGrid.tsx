export interface ICardProps {
  id: number;
  element: string;
  header: string;
  content: string;
  note: string;
}

export interface IButtonProps {
  id: number;
  element: string;
  type?: "button" | "submit" | "reset";
  color: string;
  title: string;
}
export const grid: (ICardProps | IButtonProps)[] = [
  {
    id: 1,
    element: "Card",
    header: "SELECT ANY WORD TYPE TO START CONSTRUCTING A SENTENCE",
    content: "Step 1",
    note: "Note: You may only select one word type and proceed to the next section.",
  },
  {
    id: 2,
    element: "Card",
    header: "NOW, SELECT ANY WORD TO GET YOUR SENTENCE",
    content: "step 2",
    note: "Note: Final step",
  },
  {
    id: 3,
    element: "Button",
    title: "Generate",
    type: "submit",
    color: "blue",
  },
];
