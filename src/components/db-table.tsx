import React from "react";
import { useQuery } from "@tanstack/react-query";
import type { Ticket } from "@/interfaces";

export default function DBTable() {
  const { data, error, isLoading } = useQuery<Ticket[], Error>(
    ["/api/tickets"],
    async () => {
      const response = await fetch("/api/tickets");
      return response.json();
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: </div>;
  }

  return (
    <div>
      {data.map((ticket: Ticket) => (
        <div key={ticket.id}>
          <h3>{ticket.price}</h3>
          <p>{ticket.seat}</p>
        </div>
      ))}
    </div>
  );
}
