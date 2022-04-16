import { makeRemoteSignup } from "@clean/main/usecases"
import { Signup } from "@clean/presentation/pages"
import { makeSignupValidation } from "./signup-validation-factory"

export const makeSignup: React.FC = (props) => {
  return (
    <Signup 
      {...props}
      addAccount={makeRemoteSignup()}
      validation={makeSignupValidation()}
    />
  )
}