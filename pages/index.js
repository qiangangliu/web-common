import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {name}  from 'kyrie_add'

export default function Home() {
  const aaaa = name(1,2)
  return (
   <div>{aaaa}</div>
  )
}
