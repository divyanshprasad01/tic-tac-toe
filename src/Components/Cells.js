export default function Cells({player , onClick}) {
    return (
        <button className="w-auto h-full bg-slate-200 border-3 border-slate-800 rounded-xl shadow-2xl z-70 hover:bg-slate-300 text-9xl p-{1.5}" onClick={onClick}>{player}</button>
    )
}


