import Cells from './Cells'



export default function Board({players, cells, Gamepad, bgColor, disable}) {

    return (
        <>
        <div className="grid grid-cols-3 gap-4 w-140 h-140 justify-center items-center rounded-lg p-0">
            {cells.map((cell, index) => (
                <Cells key={index} isDisabled={disable[index]} player={cell} bgColor={bgColor[index]} onClick = {() => Gamepad(index)}/>
            ))}
        </div>
        </>
    )
}
