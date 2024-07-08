import { Trophy, Document, InformationCircleOutline } from "react-ionicons";
import { ParticipantT } from "../../types";
import { Tooltip } from 'antd';
import TooltipCard from '../TooltipCard/index'

interface TaskProps {
	participant: ParticipantT;
	provided: any;
}

const Participant = ({ participant, provided }: TaskProps) => {
	const {
		// id,
		name,
		image,
		alt,
		participated,
		wins,
		// losses,
		attendance, 
	} = participant;

	return (
		<div
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			className="w-full cursor-grab bg-white border-2 border-white flex flex-col justify-between gap-3 items-start shadow-sm rounded-xl px-3 py-4"
		>
			
			<div className="w-full flex items-center gap-2">
				<img src={image} width={40} height={40} className="rounded-full" alt={alt} />
				<span className="text-[15.5px] font-bold text-[#555]">{name}</span>
			</div>
			<div className="w-full border border-dashed"></div>
			<div className="w-full flex items-center justify-start gap-3">
				<div className="flex gap-2">
					<Trophy color='#fdba74' width="22px" height="22px" /> {`${wins}/${participated}`}
				</div>

				<div className="flex gap-2">
					<Document color='#fdba74' width="22px" height="22px" /> {`${attendance}%`}
				</div>

				<Tooltip placement="right" title={<TooltipCard details={participant} />}>
				<div className="cursor-pointer">
					<InformationCircleOutline />
				</div>
				</Tooltip>
				
			</div>
		</div>
	);
};

export default Participant;
