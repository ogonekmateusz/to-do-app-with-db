import {supabase} from "../utils/supabase";

export const fetchTasks = async () => {
  const { data, error } = await supabase.from("tasks").select();
  if (error) console.log("Error fetching data");
  return data;
};
