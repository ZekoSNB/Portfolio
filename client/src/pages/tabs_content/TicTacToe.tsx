import { useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import Cross from "../../assets/tictactoe/cross.svg";
import Circle from "../../assets/tictactoe/circle.svg";
import Border from "../../assets/tictactoe/border.svg";
import "../../styles/TicTacToe.css";

type playFieldType = {
  [pos: number]: "O" | "X" | "N";
};

type setMoveProps = {
  pos: number;
  value: "X" | "O" | "N";
  setValue: React.Dispatch<React.SetStateAction<playFieldType>>;
  move: number;
  setMove: React.Dispatch<React.SetStateAction<number>>;
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

  useEffect(() => {
    if (checkWin(playField) && started) {
      alert("Vyhrál jsi!");
      resetGame(playField, setPlayField);
      return;
    }
    if (checkDraw(playField) && started) {
      alert("Remíza!");
      resetGame(playField, setPlayField);
      return;
    }
  }, [playField, started]);

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
            alert("sorry nie je dorobena mechanika :(");
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
      gap="0.2"
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
            key={pos}
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
              {renderImg(pos, value, move)}
            </button>
          </Box>
        );
      })}
    </Box>
  );
}

export default TicTacToe;

function resetGame(
  playField: playFieldType,
  setPlayField: React.Dispatch<React.SetStateAction<playFieldType>>,
) {
  setPlayField({
    ...playField,
    [1]: "N",
    [2]: "N",
    [3]: "N",
    [4]: "N",
    [5]: "N",
    [6]: "N",
    [7]: "N",
    [8]: "N",
    [9]: "N",
  });
}

function checkDraw(playField: playFieldType) {
  return Object.values(playField).every((value) => value !== "N");
}

function checkWin(playField: playFieldType) {
  const winCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (const combination of winCombinations) {
    const [a, b, c] = combination;

    const isNotEmpty =
      playField[a] !== "N" && playField[b] !== "N" && playField[c] !== "N";
    const isWin =
      playField[a] &&
      playField[a] === playField[b] &&
      playField[a] === playField[c];
    if (isNotEmpty && isWin) return true;
  }
  return false;
}

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

function renderImg(pos: string, value: string, move: number) {
  return value == "N" ? (
    <Box
      height={"100%"}
      w={"100%"}
      position={"relative"}
      className={"game__image"}
    >
      <img
        className="game__image--hover"
        src={move % 2 === 0 ? `${Cross}` : `${Circle}`}
      />
    </Box>
  ) : (
    <img key={pos} src={value == "X" ? Cross : Circle} />
  );
}
