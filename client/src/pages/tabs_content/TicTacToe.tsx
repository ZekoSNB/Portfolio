import { useState, useMemo } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import Cross from "../../assets/tictactoe/cross.svg";
import Circle from "../../assets/tictactoe/circle.svg";
import Border from "../../assets/tictactoe/border.svg";

type playFieldType = {
  [pos: number]: "O" | "X" | "N";
};

function TicTacToe() {
  const [started, setStarted] = useState<boolean>(false);
  const [singlePlayer, setSinglePlayer] = useState<boolean | null>();
  const [move, setMove] = useState<number>(0);
  const [playField, setPlayField] = useState<playFieldType>({
    1: "N",
    2: "N",
    3: "N",
    4: "N",
    5: "N",
    6: "N",
    7: "N",
    8: "N",
    9: "N",
  });

  if (!started) {
    return (
      <Box gridTemplateColumns={"repeat(2,1fr)"} display={"grid"} gap="12">
        <Button
          variant={"outline"}
          color={"white"}
          _hover={{
            color: "black",
            transform: "translateY(-4px)",
          }}
          onClick={() => {
            setSinglePlayer(true);
            setStarted(true);
          }}
        >
          Hráš sám
        </Button>
        <Button
          variant={"outline"}
          color={"white"}
          _hover={{
            color: "black",
            transform: "translateY(-4px)",
          }}
          onClick={() => {
            setSinglePlayer(false);
            setStarted(true);
          }}
        >
          Hráš s niekým
        </Button>
      </Box>
    );
  }
  console.log(singlePlayer);
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={"repeat(3,1fr)"}
      gap="6"
      position={"relative"}
      w={"65%"}
      h={"65%"}
      mx={"auto"}
    >
      <img
        src={Border}
        style={{
          position: "absolute",
          top: 0,
          left: "33%",
          transform: "translateX(-50%)",
          height: "100%",
        }}
      />
      <img
        src={Border}
        style={{
          position: "absolute",
          top: 0,
          left: "67%",
          transform: "translateX(-50%)",
          height: "100%",
        }}
      />
      <img
        src={Border}
        style={{
          position: "absolute",
          top: "33%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-90deg)",
          height: "100%",
        }}
      />
      <img
        src={Border}
        style={{
          position: "absolute",
          top: "67%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-90deg)",
          height: "100%",
        }}
      />
      {Object.entries(playField).map(([pos, value]) => {
        return (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            aspectRatio={"1/1"}
          >
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
              onClick={() =>
                setPlayerMove({
                  pos: Number(pos),
                  value,
                  setValue: setPlayField,
                  move,
                  setMove,
                })
              }
            >
              {renderImg(pos, value)}
            </button>
          </Box>
        );
      })}
    </Box>
  );
}

type setMoveProps = {
  pos: number; // position in playfield
  value: "X" | "O" | "N";
  setValue: React.Dispatch<React.SetStateAction<playFieldType>>;
  move: number;
  setMove: React.Dispatch<React.SetStateAction<number>>;
};

function setPlayerMove(props: setMoveProps) {
  if (props.value !== "N") return;

  const newValue = props.move % 2 === 0 ? "X" : "O";
  props.setValue((prev) => ({
    ...prev,
    [props.pos]: newValue,
  }));
  props.setMove((prev) => prev + 1);
  return;
}

function renderImg(pos: string, value: string) {
  return value == "N" ? (
    <p color="white">kokot</p>
  ) : (
    <img key={pos} src={value == "X" ? Cross : Circle} />
  );
}

export default TicTacToe;
