import React, { FC } from 'react'
import Layout from '@clean/presentation/components/hoc/layout/MainLayout/Layout'
import PageWithLayoutType from '@clean/presentation/components/hoc/layout/types/page-with-layout-type'
import { TeacherLandingPage } from '@clean/presentation/pages'

const Instructor: FC = () => <TeacherLandingPage />
;(Instructor as PageWithLayoutType).layout = Layout

export default Instructor
