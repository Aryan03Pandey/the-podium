/* eslint-disable @typescript-eslint/no-explicit-any */
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { Board } from "../../data/board";
import { Columns } from "../../types";
import { onDragEnd } from "../../helpers/onDragEnd";
import Participant from "../../components/Participant";

const Home = () => {
	const [columns, setColumns] = useState<Columns>(Board);

	return (
		<>
			<DragDropContext onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}>
			<div className="flex gap-2">
				<div className="w-[40%] px-5 pb-8 md:gap-0 gap-10">
					{Object.entries(columns).slice(0,1).map(([columnId, column]: any) => (
						// columnId === 'participants' ?
						<div
							className="w-full flex flex-col gap-0"
							key={columnId}
						>
							<Droppable
								droppableId={columnId}
								key={columnId}
							>
								{(provided: any) => (
									<div
										ref={provided.innerRef}
										{...provided.droppableProps}
										className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
									>
										<div className="flex items-center justify-center py-[10px] w-full bg-orange-300 rounded-lg shadow-sm text-black font-bold text-[15px]">
											Participants
										</div>
										{column.items.map((participant: any, index: any) => (
											<Draggable
												key={participant.id.toString()}
												draggableId={participant.id.toString()}
												index={index}
											>
												{(provided: any) => (
													<>
														<Participant
															provided={provided}
															participant={participant}
														/>
													</>
												)}
											</Draggable>
										))}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
							
						</div> 
						// : ""
					))} 
				</div>
				
				<div className="flex flex-col gap-2 w-full pt-5">

					<div className="flex items-center justify-center py-[10px] w-full bg-orange-300 rounded-lg shadow-sm text-black font-bold text-[15px]">
						Room A
					</div>					

					<div className="w-full flex px-5 pb-8 gap-4">
					{Object.entries(columns).slice(1,3).map(([columnId, column]: any) => (
							// columnId !== 'participants' ?
							<div
								className="w-full flex flex-col gap-0"
								key={columnId}
							>
								<Droppable
									droppableId={columnId}
									key={columnId}
								>
									{(provided: any) => (
										<div
											ref={provided.innerRef}
											{...provided.droppableProps}
											className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
										>
											<div className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
												{column.name}
											</div>
											{column.items.map((participant: any, index: any) => (
												<Draggable
													key={participant.id.toString()}
													draggableId={participant.id.toString()}
													index={index}
												>
													{(provided: any) => (
														<>
															<Participant
																provided={provided}
																participant={participant}
															/>
														</>
													)}
												</Draggable>
											))}
											{provided.placeholder}
										</div>
									)}
								</Droppable>
								
							</div> 
							// : ""
						))} 
					</div>

					<div className="flex items-center justify-center py-[10px] w-full bg-orange-300 rounded-lg shadow-sm text-black font-bold text-[15px]">
						Room B
					</div>	

					<div className="w-full flex px-5 pb-8 gap-4">
					{Object.entries(columns).slice(3,5).map(([columnId, column]: any) => (
							// columnId !== 'participants' ?
							<div
								className="w-full flex flex-col gap-0"
								key={columnId}
							>
								<Droppable
									droppableId={columnId}
									key={columnId}
								>
									{(provided: any) => (
										<div
											ref={provided.innerRef}
											{...provided.droppableProps}
											className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
										>
											<div className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
												{column.name}
											</div>
											{column.items.map((participant: any, index: any) => (
												<Draggable
													key={participant.id.toString()}
													draggableId={participant.id.toString()}
													index={index}
												>
													{(provided: any) => (
														<>
															<Participant
																provided={provided}
																participant={participant}
															/>
														</>
													)}
												</Draggable>
											))}
											{provided.placeholder}
										</div>
									)}
								</Droppable>
								
							</div> 
							// : ""
						))} 
					</div>

					<div className="flex items-center justify-center py-[10px] w-full bg-orange-300 rounded-lg shadow-sm text-black font-bold text-[15px]">
						Room C
					</div>	

					<div className="w-full flex px-5 pb-8 gap-4">
					{Object.entries(columns).slice(5,7).map(([columnId, column]: any) => (
							// columnId !== 'participants' ?
							<div
								className="w-full flex flex-col gap-0"
								key={columnId}
							>
								<Droppable
									droppableId={columnId}
									key={columnId}
								>
									{(provided: any) => (
										<div
											ref={provided.innerRef}
											{...provided.droppableProps}
											className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
										>
											<div className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
												{column.name}
											</div>
											{column.items.map((participant: any, index: any) => (
												<Draggable
													key={participant.id.toString()}
													draggableId={participant.id.toString()}
													index={index}
												>
													{(provided: any) => (
														<>
															<Participant
																provided={provided}
																participant={participant}
															/>
														</>
													)}
												</Draggable>
											))}
											{provided.placeholder}
										</div>
									)}
								</Droppable>
								
							</div> 
							// : ""
						))} 
					</div>

					<div className="flex items-center justify-center py-[10px] w-full bg-orange-300 rounded-lg shadow-sm text-black font-bold text-[15px]">
						Room D
					</div>	

					<div className="w-full flex px-5 pb-8 gap-4">
					{Object.entries(columns).slice(7,9).map(([columnId, column]: any) => (
							// columnId !== 'participants' ?
							<div
								className="w-full flex flex-col gap-0"
								key={columnId}
							>
								<Droppable
									droppableId={columnId}
									key={columnId}
								>
									{(provided: any) => (
										<div
											ref={provided.innerRef}
											{...provided.droppableProps}
											className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
										>
											<div className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
												{column.name}
											</div>
											{column.items.map((participant: any, index: any) => (
												<Draggable
													key={participant.id.toString()}
													draggableId={participant.id.toString()}
													index={index}
												>
													{(provided: any) => (
														<>
															<Participant
																provided={provided}
																participant={participant}
															/>
														</>
													)}
												</Draggable>
											))}
											{provided.placeholder}
										</div>
									)}
								</Droppable>
								
							</div> 
							// : ""
						))} 
					</div>
				</div>
			</div>

			</DragDropContext>
		</>
	);
};

export default Home;