import { VscCircleLargeFilled } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";

const TicketCard = ({ ticket, handleClick }) => {
  return (
    <div className="shadow-md rounded-md hover:cursor-pointer bg-white py-4 px-2" onClick={() => handleClick(ticket)}>
      <div className="flex justify-between px-4 lg:text-xl">
        {ticket?.title}{" "}
        <button
          className={`flex justify-center items-center gap-1 px-2 rounded-full py-1 text-base ${ticket?.status === "Open" ? "bg-[#B9F8CF] text-black" : "bg-[#F8F3B9] text-black"}`}
        >
          <VscCircleLargeFilled
            className={
              ticket?.status === "Open" ? "text-[#0B5E06]" : "text-[#FEBB0C]"
            }
          />{" "}
          {ticket.status}
        </button>
      </div>
      <p className="px-4 py-2">{ticket?.description}</p>
      <div className="flex justify-between lg:px-4 py-2 text-sm text-gray-500">
        <p># {ticket?.id}</p>
        <p
          className={
            ticket.priority === "HIGH PRIORITY"
              ? "text-red-500"
              : ticket.priority === "MEDIUM PRIORITY"
                ? "text-yellow-500"
                : "text-green-500"
          }
        >
          {ticket?.priority}
        </p>
        <p>{ticket?.customer}</p>
        <p className="flex gap-2 justify-center items-center">
          {" "}
          <SlCalender />{" "}
          {new Date(ticket?.createdAt).toLocaleDateString("en-GB")}
        </p>
      </div>
    </div>
  );
};

export default TicketCard;
