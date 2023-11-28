import React from "react";
import "./Playground.css";
import { Button, Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import {
  IButtonProps,
  ICardProps,
  cards,
  grid,
} from "../../Data/PlaygroundGrid";
const Playground = () => {
  return (
    <div className="playground">
      <div className="SelectScreen">
        {grid.map((component) => {
          const cardItem = component as ICardProps;
          const buttonItem = component as IButtonProps;

          return component.element == "Card" ? (
            <Card key={component.id}>
              <CardHeader>{cardItem.header}</CardHeader>
              <CardBody>{cardItem.content}</CardBody>
              <CardFooter>{cardItem.note}</CardFooter>
            </Card>
          ) : component.element == "Button" ? (
            <Button type={buttonItem.type}>{buttonItem.title}</Button>
          ) : null;
        })}
      </div>
      <div className="HistoryScreen">
        <p>History</p>
      </div>
    </div>
  );
};

export default Playground;
