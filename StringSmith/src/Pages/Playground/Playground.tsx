import React from "react";
import "./Playground.css";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import {
  IButtonProps,
  ICardProps,
  selectgrid,
} from "../../Data/PlaygroundGrid";
import { useQuery } from "@tanstack/react-query";
import { getWordTypes } from "../../Services/API/WordtypesAPI";
import { getWords } from "../../Services/API/WordsAPI";

interface IWordTypes {
  _id: Number;
  WordType: String;
}
interface IWords {
  _id: Number;
  word: string;
  wordTypeId: Number;
}
const Playground = () => {
  const {
    isError: isErrorTypes,
    isLoading: isLoadingTypes,
    data: WordTypes,
  } = useQuery<IWordTypes[], Error>({
    queryKey: ["WordTypes"],
    queryFn: getWordTypes,
  });

  const {
    isError: isErrorWords,
    isLoading: isLoadingWords,
    data: Words,
  } = useQuery<IWords[], Error>({
    queryKey: ["Words"],
    queryFn: getWords,
  });

  return (
    <div className="playground">
      <div className="SelectScreen">
        {selectgrid.map((component) => {
          const cardItem = component as ICardProps;
          const buttonItem = component as IButtonProps;
          return component.element == "Card" ? (
            <Card key={component.id}>
              <CardHeader className="header">{cardItem.header}</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    {cardItem.id == 1 ? (
                      <Input type="select">
                        {WordTypes?.map((WordType) => {
                          return <option>{WordType.WordType}</option>;
                        })}
                      </Input>
                    ) : (
                      <Input type="select">
                        {Words?.map((word) => {
                          return <option>{word.word}</option>;
                        })}
                      </Input>
                    )}
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>{cardItem.note}</CardFooter>
            </Card>
          ) : component.element == "Button" ? (
            <Button className={buttonItem.title} type={buttonItem.type}>
              {buttonItem.title}
            </Button>
          ) : null;
        })}
      </div>
      <div className="ResultScreen">
        <Card style={{ width: "100%" }}>
          <CardBody style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                padding: "0px",
                border: "1px solid #f1f1f1",
                borderRadius: "4px",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
              }}
            >
              <label
                style={{
                  backgroundColor: "#6495ed",
                  padding: "8px",
                  borderRadius: "4px 0 0 4px",
                  color: "#fff",
                }}
              >
                Result:
              </label>
              <p
                style={{
                  padding: "8px",
                  borderRadius: "0 4px 4px 0",
                  margin: "0",
                  width: "100%",
                }}
              >
                Love will hurt more than anything...
              </p>
            </div>
          </CardBody>
        </Card>
        <Card style={{ width: "100%", height: "65%" }}>
          <CardBody
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <p>History</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Playground;
