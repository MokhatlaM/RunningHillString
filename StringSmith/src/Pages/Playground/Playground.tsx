import React, { useEffect, useState } from "react";
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
  id: Number;
  WordType: String;
}
interface IWords {
  id: Number;
  WordTypeId: Number;
  Word: string;
}

const Playground = () => {
  const [typeSelect, setTypeSelect] = useState("");
  const [selectedWord, setSelectedWord] = useState<IWords[]>([]);
  const [generatedSentence, setGeneratedSentence] = useState<string>("");
  const generateRandomSentence = () => {
    if (selectedWord.length === 0) {
      setGeneratedSentence("No word selected!");
    } else {
      const randomIndex = Math.floor(Math.random() * selectedWord.length);
      const word = selectedWord[randomIndex].Word;
      setGeneratedSentence(`The selected word is: ${word}`);
    }
  };
  const handleTypeSelection = (e) => {
    console.log("Type select hit");
    setTypeSelect(e.target.value);
    console.log(e.target.value);
  };

  const handleWordSelection = (e) => {
    console.log("word select hit");
    const selectedWordId = e.target.value;
    const word = Words?.find((word) => word.id === Number(selectedWordId));
    setSelectedWord(word ? [word] : []);
    console.log(word);
  };

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

  const handleSubmit = (e) => {
    console.log("--------------");
    console.log("Button hit");
    console.log("---------------");
    e.preventDefault();
    generateRandomSentence();

    e.preventDefault();
  };

  return (
    <div className="playground">
      <div className="SelectScreen">
        <Form onSubmit={handleSubmit}>
          {selectgrid.map((component) => {
            const cardItem = component as ICardProps;
            const buttonItem = component as IButtonProps;

            return component.element == "Card" ? (
              <Card key={component.id}>
                <CardHeader className="header">{cardItem.header}</CardHeader>
                <CardBody>
                  <FormGroup>
                    {cardItem.id == 1 ? (
                      <Input
                        type="select"
                        value={typeSelect}
                        onChange={handleTypeSelection}
                      >
                        <option>Select word type...</option>
                        {WordTypes?.map((WordType) => {
                          return <option>{WordType.WordType}</option>;
                        })}
                      </Input>
                    ) : (
                      <Input
                        type="select"
                        value={selectedWord}
                        onChange={handleWordSelection}
                      >
                        <option>Select word...</option>
                        {Words?.map((word) => {
                          return <option>{word.Word}</option>;
                        })}
                      </Input>
                    )}
                  </FormGroup>
                </CardBody>
                <CardFooter>{cardItem.note}</CardFooter>
              </Card>
            ) : component.element == "Button" ? (
              <Button className={buttonItem.title} type={buttonItem.type}>
                {buttonItem.title}
              </Button>
            ) : null;
          })}
        </Form>
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
                {generatedSentence}
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
