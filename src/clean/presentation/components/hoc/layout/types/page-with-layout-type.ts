import React from 'react'
import { NextPage } from 'next'

type PageWithMainLayoutType = NextPage & { layout: any }

type PageWithLayoutType = PageWithMainLayoutType

export default PageWithLayoutType
