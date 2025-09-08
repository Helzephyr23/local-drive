import { app } from "../app"

class ApiError extends Error{
  constructor(
      statusCode,
      message= "Something went wrong",
      errors = [],
      statck = ""
 )
 {
      super(message)
      this.statusCode = statusCode
      this.data = null
      this.message = message,
      this.errors = errors
      this.success = false,
      this.errors = errors

      if (statck) {
       this.stack = stack
      } else{
       Error.captureStackTrace
      }
 }
}
export {ApiError}