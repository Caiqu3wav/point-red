import { FaUndo } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { useState } from "react";

export default function FrameGame() {
    const [point, setPoint] = useState([]);

    const addPoints = (e) => {

        const clickX = e.clientX;
        const clickY = e.clientY;

            const setNewPoint = { x: clickX, y: clickY };

            setPoint([...point, setNewPoint]);
        }

    const removePoint = () => {
        const newArray = [...point]

        newArray.pop();

        setPoint(newArray)
    }
    

  return (
    <div className="flex flex-col items-center justify-center">
        <button onClick={addPoints}>
    <div className="rounded-xl h-[400px] w-[500px] bg-slate-500">
      {point.map((points, i) => (
        <span className="absolute text-2xl"
         style={{ left: points.x, top: points.y }} key={i}>.</span>
      ))}
    </div>
    </button>
        <div className="flex gap-3 mt-3"><button onClick={removePoint}><FaUndo/></button>
        <button><FaRedo/></button></div>
    </div>
  )
}
