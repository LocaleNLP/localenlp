import { logger } from "@localenlp/logger";
import { createClient } from "@localenlp/supabase/server";

export async function getUser() {
  const supabase = createClient();

  try {
    const result = await supabase.auth.getUser();

    return result;
  } catch (error) {
    logger.error(error);

    throw error;
  }
}

export async function getPosts() {
  const supabase = createClient();

  try {
    const result = await supabase.from("posts").select("*");

    return result;
  } catch (error) {
    logger.error(error);
    throw error;
  }
}