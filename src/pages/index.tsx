import React, { FC } from 'react'
import Layout from '@clean/presentation/components/hoc/layout/MainLayout/Layout'
import PageWithLayoutType from '@clean/presentation/components/hoc/layout/types/page-with-layout-type'
import { StudentLandingPage } from '@clean/presentation/pages'

const Home: FC = () => <StudentLandingPage />
;(Home as PageWithLayoutType).layout = Layout

export default Home
