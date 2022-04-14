import React, { FC } from 'react'
import { PageWithLayoutType, Layout } from '@clean/presentation/components/hoc'
import { StudentLandingPage } from '@clean/presentation/pages'

const Home: FC = () => <StudentLandingPage />
;(Home as PageWithLayoutType).layout = Layout

export default Home
