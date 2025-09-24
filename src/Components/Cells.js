export default function Cells({isDisabled , player, bgColor, onClick}) {
    return (
        <button disabled={isDisabled} className={`aspect-square w-auto ${bgColor} border-3 border-slate-800 rounded-xl shadow-2xl z-70 hover:bg-slate-300 text-9xl p-{1.5}`} onClick={onClick}>{player}</button>
    )
}


