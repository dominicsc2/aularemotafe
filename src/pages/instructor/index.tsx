import React, { FC } from 'react'
import { PageWithLayoutType, Layout } from '@clean/presentation/components/hoc'
import { TeacherLandingPage } from '@clean/presentation/pages'

const Instructor: FC = () => <TeacherLandingPage />
;(Instructor as PageWithLayoutType).layout = Layout

export default Instructor
