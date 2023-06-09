import { returnJSONResponse } from "./utils";

function handleSequelizeError(error: any) {
  const sequelizeErrors = [
    "SequelizeValidationError",
    "SequelizeUniqueConstraintError",
    "SequelizeDatabaseError",
  ];

  if (sequelizeErrors.includes(error.name)) {
    return returnJSONResponse({
      status: "error",
      error: error.message,
      data: error.sql,
      sqlMessage: error.original,
      errorCode: 200,
    });
  } else {
    return returnJSONResponse({
      status: "error",
      error: error.message,
    });
  }
}

export default handleSequelizeError;
