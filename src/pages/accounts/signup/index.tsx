import { PageWithLayoutType, Layout } from '@clean/presentation/components/hoc'
import { Signup as CleanSignup } from '@clean/presentation/pages'
import React, { FC } from 'react'

const Signup: FC = () => <CleanSignup />
;(Signup as PageWithLayoutType).layout = Layout

export default Signup
