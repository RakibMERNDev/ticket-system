import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProgressBox from "./components/ProgressBox";
import TicketCard from "./components/TicketCard";
import toast from "react-hot-toast";

function App() {
  // all tickets data
  const [tickets, setTickets] = useState([]);
  // ticket which are in progress
  const [inProgressTickets, setInProgressTickets] = useState(
    localStorage.getItem("inProgressTickets")
      ? JSON.parse(localStorage.getItem("inProgressTickets"))
      : [],
  );

  const [resolvedTickets, setResolvedTickets] = useState(
    localStorage.getItem("resolvedTickets")
      ? JSON.parse(localStorage.getItem("resolvedTickets"))
      : [],
  );

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/tickets.json");
      const data = await response.json();
      setTickets(data);
    }
    fetchData();
  }, []);

  const selectTicket = (ticket) => {
    const ticketWithId = { ...ticket, id: crypto.randomUUID() };

    setInProgressTickets([...inProgressTickets, ticketWithId]);
    localStorage.setItem(
      "inProgressTickets",
      JSON.stringify([...inProgressTickets, ticketWithId]),
    );

    toast.success("Ticket added to progress list");
  };

  const markAsResolved = (ticket) => {
    const updatedInProgressTickets = inProgressTickets.filter(
      (t) => t.id !== ticket.id,
    );

    setInProgressTickets(updatedInProgressTickets);
    localStorage.setItem(
      "inProgressTickets",
      JSON.stringify(updatedInProgressTickets),
    );

    const resolvedTicket = {
      ...ticket,
      id: crypto.randomUUID(),
    };

    const updatedResolvedTickets = [...resolvedTickets, resolvedTicket];

    setResolvedTickets(updatedResolvedTickets);
    localStorage.setItem(
      "resolvedTickets",
      JSON.stringify(updatedResolvedTickets),
    );

    toast.success("Ticket marked as resolved");
  };

  return (
    <>
      <section>
        <Navbar />
      </section>

      <section className="bg-gray-100 py-10">
        <div className="max-w-3xl mx-auto flex px-5">
          <div className="w-1/2 pr-2">
            <ProgressBox
              classes="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-full"
              label="In Progress"
              count={inProgressTickets?.length}
            />
          </div>

          <div className="w-1/2 pl-2">
            <ProgressBox
              classes="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] text-white w-full"
              label="Resolved"
              count={resolvedTickets?.length}
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-between p-5">
          <div className="space-y-3">
            <h4 className="text-xl">Customer Tickets</h4>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
              {tickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  handleClick={selectTicket}
                />
              ))}
            </div>
          </div>

          <div className=" grid md:grid-cols-2 xl:grid-cols-1 gap-5 xl:gap-2 mt-5">
            <div>
              <h4 className="text-xl ">Ticket Status</h4>
              <div className="flex flex-col gap-3 mt-3">
                {inProgressTickets.length === 0 && (
                  <div className="text-center text-gray-500">
                    No tickets in progress. Please select a ticket
                  </div>
                )}
                {inProgressTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="shadow-md w-full rounded-md bg-white py-4 flex flex-col items-center gap-3"
                  >
                    <div className="flex justify-between px-4 lg:text-xl w-full">
                      {ticket?.title}
                    </div>

                    <button
                      onClick={() => markAsResolved(ticket)}
                      className="bg-green-700 text-white px-4 py-1 hover:bg-green-400 rounded-md"
                    >
                      Mark as Resolved
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl">Resolved Task</h4>
              <div className="grid grid-cols-1 gap-3 mt-3">
                {resolvedTickets.length === 0 && (
                  <div className="text-center text-gray-500">
                    No tickets resolved yet. Please mark a ticket as resolved.
                  </div>
                )}

                {resolvedTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="shadow-md rounded-md bg-[#E0E7FF] py-4 flex flex-col items-center gap-3"
                  >
                    <div className="flex justify-between px-4 lg:text-xl w-full">
                      {ticket?.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;
