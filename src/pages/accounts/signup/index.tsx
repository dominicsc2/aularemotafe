import { makeSignup } from '@clean/main/factories/pages'
import { AccountLayout, PageWithLayoutType } from '@clean/presentation/components/hoc'
import { FC } from 'react'

const Signup: FC = (props) => makeSignup(props)
;(Signup as PageWithLayoutType).layout = AccountLayout

export default Signup
