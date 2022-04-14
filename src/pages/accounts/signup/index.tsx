import { AccountLayout, PageWithLayoutType } from '@clean/presentation/components/hoc';
import { Signup as CleanSignup } from '@clean/presentation/pages';
import React, { FC } from 'react';

const Signup: FC = () => <CleanSignup />
;(Signup as PageWithLayoutType).layout = AccountLayout

export default Signup
