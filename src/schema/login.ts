import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  emailOrUsername: Yup.string().required(),
  password: Yup.string().required(),
});

export default validationSchema;
