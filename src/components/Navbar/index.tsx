import {
	NotificationsOutline,
	SettingsOutline,
	ShareSocialOutline,
} from "react-ionicons";

const Navbar = () => {
	return (
		<div className="md:w-[calc(100%-230px)] w-[calc(100%-60px)] border-b-[1px] bordere fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-secondary bg-primary">
			<div className="flex items-center gap-3 cursor-pointer">
			</div>
			
			<div className="md:flex hidden items-center gap-4">
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<ShareSocialOutline color={"#FFFFFF"} />
				</div>
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<SettingsOutline color={"#FFFFFF"} />
				</div>
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<NotificationsOutline color={"#FFFFFF"} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
