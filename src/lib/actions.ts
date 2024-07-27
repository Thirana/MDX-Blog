"use server";
import { db } from "@/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Zod schema defining the structure of the form data
const FormSchema = z.object({
  // required a number
  id: z.number(),
  //   required a string with at least one character
  email: z.string().min(1, { message: "Email is required." }),
  //   required a boolean
  isSubscribed: z.boolean(),
});

// use to validate the subset of data needed for creating a subscriber
const CreateSubscriber = FormSchema.omit({ id: true, isSubscribed: true });

// defining a shape of a state object
type State = {
  // optional object for validation errors for the 'email' field
  errors?: {
    email?: string[];
  };
  //   optional string to store status messages
  message?: string | null;
};

export async function createSubscriber(prevState: State, formData: FormData) {
  // validating the email field
  const validatedField = CreateSubscriber.safeParse({
    email: formData.get("email"),
  });

  //   if validation false return error details and error message
  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: "Email is Required",
    };
  }

  //   destruturing the data
  const { email } = validatedField.data;

  try {
    // create new record in subscriber schema
    await db.subscriber.create({
      data: {
        email: email,
      },
    });
    revalidatePath("/");
    return { message: "Thank you for Subscribing!" };
  } catch (error) {
    if (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return {
            message: "Email already Exist in the DB",
          };
        }
      }
    }

    return { message: "Database Error: Failed to create Subscriber." };
  }
}
