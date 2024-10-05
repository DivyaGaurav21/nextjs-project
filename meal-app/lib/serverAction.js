"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  //we can do here setver side validation by using useFormState hooks(react-dom)
  await saveMeal(meal);
  revalidatePath('/meals');
  //we use revalidate path beause t build time does not reflect changes
  redirect('/meals');
}
