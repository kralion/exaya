import React from "react";
import { supabase } from "@/libs";

export default function SupaTest() {
  const { data } = supabase.from("usuarios").select("*");
  console.log(data);
  return <div>SupaTest</div>;
}
