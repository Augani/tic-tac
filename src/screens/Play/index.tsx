import React, { ReactElement } from 'react';
import Logo from '../../components/Logo'
import Grid from '../../components/Grid'
import { Link } from 'react-router-dom';


function index(): ReactElement {
    const [whoToPlay, setWhoToPlay] = React.useState<"You" | "Bot">("You");
    const [winner, setWinner] = React.useState(null);
    const [aDraw, setDraw] = React.useState(false);
    const [board, setBoard] = React.useState(Array(9).fill(null));
    const [nextMove, setNextMove] = React.useState<number>(0);

    const whoWon = (currentBoard: any[], user:number) => {
        const winningSpots = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        let yuu = currentBoard;
         for (let i = 0; i < winningSpots.length; i++) {
            const  [spot1, spot2, spot3] = winningSpots[i];
            const main = winningSpots[i];
            if (currentBoard[spot1] && currentBoard[spot1] === currentBoard[spot2] && currentBoard[spot2] === currentBoard[spot3]) {
                return currentBoard[spot1];
            }
            for(const v in currentBoard){
                if(currentBoard[v]=== "You" && main.includes(parseInt(v))){
                    const ind =  main.indexOf(parseInt(v))
                    main.splice(ind, 1);
                }
            }
           if(main.length < yuu.length){
               if(main.length && !currentBoard[main[0]]){
                yuu = main;
               } 
           }
        }
        for(let m=0; m< yuu.length; m++){
            if(!currentBoard[yuu[m]])setNextMove(yuu[m]);
        }
        return null;
    }

    const userSelect = (select: number) => {
        const currentBoard = board;
        if (currentBoard[select]) return;
        currentBoard[select] = whoToPlay;
        const userWon = whoWon(currentBoard, select);
        if (!userWon) {
            if(currentBoard.filter(i=>i==="You" || i === "Bot").length == 9){
                return setDraw(true)
            }
        setWhoToPlay(whoToPlay === "You" ? "Bot" : "You");
        // return automated()
        } else {
            setWinner(userWon)
        }
    }

    React.useEffect(()=>{
        if(whoToPlay == "Bot"){
            automated();
        }
    }, [whoToPlay])


    const reset = () => {
        setBoard(Array(9).fill(null));
        setWhoToPlay(whoToPlay === "You" ? "Bot" : "You");
        setWinner(null)
        setDraw(false)
    }

    const automated = ()=>{
        setTimeout(()=>{
            userSelect(nextMove);
        }, 1500)
    }


    return (
        <div className=" bg-purple-900 w-full h-full flex flex-col lg:justify-center items-center relative">
            <Link to="/" className="text-gray-50 text-6xl top-5 left-4 mt-10 lg:mt-0 lg:absolute no-underline">Home</Link>
            <div className="w-2/3 lg:w-1/2 my-10 flex flex-col items-center">
                <div className="text-7xl lg:text-8xl text-pink-600 flex flex-row">
                    <Logo />
                </div>
                <div className="flex flex-col text-2xl text-gray-50 font-bold my-4">
                    <h1> {whoToPlay =="You"?"Your turn":"Bot's turn"} </h1>
                    <button onClick={reset} className="py-2 my-4 px-6 text-2xl bg-pink-600 text-white shadow-lg rounded-md">Reset</button>
                </div>
                {!winner && !aDraw && <div className="grid grid-cols-3 grid-rows-3  w-80 h-80">
                    {board.map((element, index: number) => {
                        return <Grid  key={index} value={element} onClick={() => userSelect(index)} />
                    })}
                </div>}

            </div>
            <div className="w-2/3 lg:w-1/2 flex flex-col text-5xl lg:text-8xl align-center text-pink-600 items-center my-6  tracking-widest uppercase">
                {winner && <h1>{winner} win{winner === "You"?'':'s'}</h1>}
                {aDraw && <h1>It&apos;s a tie</h1>}
            </div>
        </div>
    )
}

export default index;
