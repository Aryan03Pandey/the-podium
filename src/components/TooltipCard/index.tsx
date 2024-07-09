

const TooltipCard: React.FC<any> = ({ details }) => {
    return <div className="bg-secondary w-[200px] h-[150px] p-2 gap-[3px] rounded-md flex flex-col">
        <h1 className="text-[16px] font-medium text-white">{details.name}</h1>

        <div className="w-full border-b-[1px] border-black"></div>

        <div className="flex gap-2">
            <span>{details.participated}</span>
            <h2 className="text-secondary-text">Participations</h2>
        </div>
        <div className="flex gap-2">
            <span>{details.wins}</span>
            <h2 className="text-secondary-text">Wins</h2>
        </div>
        <div className="flex gap-2">
            <span>{details.losses}</span>
            <h2 className="text-secondary-text">Losses</h2>
        </div>
        <div className="flex gap-2">
            <span>{details.attendance}%</span>
            <h2 className="text-secondary-text">Average Attendance</h2>
        </div>

    </div>
}

export default TooltipCard;