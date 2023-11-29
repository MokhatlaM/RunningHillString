import { Input } from "reactstrap";

export interface ICardProps {
  id: number;
  element: string;
  header: string;
  //   content: JSX.Element;
  note: string;
}

export interface IButtonProps {
  id: number;
  element: string;
  type?: "button" | "submit" | "reset";
  color: string;
  title: string;
}

export interface IWordTypeProps {
  _id: number;
  WordType: string;
}

export const selectgrid: (ICardProps | IButtonProps)[] = [
  {
    id: 1,
    element: "Card",
    header: "SELECT ANY WORD TYPE TO START CONSTRUCTING A SENTENCE",
    note: "Note: You may only select one word type and proceed to the next section.",
  },
  {
    id: 2,
    element: "Card",
    header: "NOW, SELECT ANY WORD TO GET YOUR SENTENCE",
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

// export const resultsgrid = [
//     {
//         id: 1,
//         element: "Label",
//         title:""
//     },
//   {
//     id: 2,
//     element: "paragraph",
//     content: null,
//   },
// ];
