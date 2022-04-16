import { makeRemoteSignup } from "@clean/main/usecases"
import { Signup } from "@clean/presentation/pages"
import { makeSignupValidation } from "./signup-validation-factory"

export const makeSignup: React.FC = () => {
  return (
    <Signup 
      addAccount={makeRemoteSignup()}
      validation={makeSignupValidation()}
    />
  )
}