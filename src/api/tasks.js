import { supabase } from "../utils/supabase";

export const fetchTasks = async () => {
  const { data, error } = await supabase.from("tasks").select();
  if (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
  return data;
};

export const deleteTask = async (taskId) => {
  const { data, error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", taskId);

  if (error) {
    console.error("Error deleting task:", error);
    return null;
  }
  return data;
};
