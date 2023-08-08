"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "api/supabase";

function DBTable() {
  const [tickets, setTickets] = useState<any>([]);
  const getData = async () => {
    const { data, error } = await supabase.from("tickets").select("*");
    if (error) console.log("error", error);
    else setTickets(data);
  };
  useEffect(() => {
    getData()
      .then(() => {
        console.log("tickets", tickets);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  console.log("Hello World");
  return <div></div>;
}

export default DBTable;
