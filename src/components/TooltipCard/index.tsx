

const TooltipCard: React.FC<any> = ({ details }) => {
    return <div className="bg-white w-[200px] h-[150px] p-2 gap-[3px] text-black rounded-md flex flex-col">
        <h1 className="text-[16px] font-medium">{details.name}</h1>

        <div className="w-full border-[1px] border-black"></div>

        <h2>{`${details.participated} participations `}</h2>
        <h2>{`${details.wins} wins `}</h2>
        <h2>{`${details.losses} losses `}</h2>
        <h2>{`${details.attendance}% avg attendance `}</h2>

    </div>
}

export default TooltipCard;