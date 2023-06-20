import handleSequelizeError from "@/utils/errorHandling";
import { returnJSONResponse } from "@/utils/utils";
import registrationSchema from "@/schema/registration";
import { hash } from "bcryptjs";
import { User } from "@/models/UserModel";

interface RegistrationBody {
  username: string;
  email: string;
  password: string;
}

export const POST = async (req: Request) => {
  const res = (await req.json()) as Partial<RegistrationBody>;

  // Validate user input using Yup schema
  try {
    await registrationSchema.validate(res);
  } catch (error: any) {
    return returnJSONResponse({ status: "error", error: error.message });
  }

  const { username, email, password } = res;

  try {
    // Hash the password using bcryptjs
    const hashedPassword = await hash(password!, 10);

    // Create the user record in the database using Sequelize
    const user = await User.create({
      username: username!,
      email: email!,
      password: hashedPassword,
    });

    // Return success response
    return returnJSONResponse({ status: "success", data: user });
  } catch (err) {
    // Handle Sequelize error
    return handleSequelizeError(err);
  }
};
