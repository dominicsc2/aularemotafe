import { Image } from '@clean/presentation/components/common'
import React from 'react'
import styles from './account-layout.module.scss'

const AccountLayout: React.FC = props => (
  <>
    <Image style="centered-img" src="/img/trilce.jpg" alt="Logo" size={120} additionalStyles="my-0" goToOnClick="/" />
    <main className={styles.content}>{props.children}</main>
  </>
)

export default AccountLayout
