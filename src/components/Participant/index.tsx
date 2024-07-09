import { Trophy, Document, InformationCircleOutline, Person } from "react-ionicons";
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
			className="w-full cursor-grab bg-secondary border-[1px] border-secondary  flex flex-col justify-between gap-3 items-start shadow-sm rounded-lg px-3 py-2"
		>
			
			<div className="w-full flex items-center gap-2">
				{	image ?
						<img src={image} width={40} height={40} className="rounded-full" alt={alt} />
					:
						<div className="inline border-[1px] rounded-full border-secondary-text p-[2px]">
							<Person color='#a1a1aa' />
						</div>
				}
				<span className="text-[15.5px] font-bold text-white">{name}</span>
			</div>
			<div className="w-full border-b-[1px] border-dashed border-secondary-text"></div>
			<div className="w-full flex items-center justify-start gap-3">
				<div className="flex gap-2 text-secondary-text text-[14px]">
					<Trophy color='#ffffff' width="16px" height="16px" /> {`${wins}/${participated}`}
				</div>

				<div className="flex gap-2 text-secondary-text text-[14px]">
					<Document color='#ffffff' width="16px" height="16px" /> {`${attendance}%`}
				</div>

				<Tooltip placement="right" title={<TooltipCard details={participant} />}>
				<div className="cursor-pointer">
					<InformationCircleOutline color="#ffffff" />
				</div>
				</Tooltip>
				
			</div>
		</div>
	);
};

export default Participant;
