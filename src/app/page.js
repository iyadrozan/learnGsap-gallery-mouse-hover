'use client'
import styles from './page.module.css'
import { useState } from 'react'
import Project from '../project'
import Modal from '../modal'

const projects = [
  {
    title: 'NexGen Solutions',
    src: 'c2montreal.png',
    link: 'https://github.com/iyadrozan',
    desc: 'Inovasi Teknologi Terkini',
    color: '#000000'
  },
  {
    title: 'Architectura Design',
    src: 'officestudio.png',
    link: 'https://github.com/iyadrozan',
    desc: 'Desain Arsitektur Modern',
    color: '#8C8C8C'
  },
  {
    title: 'TechExpress Railway',
    src: 'locomotive.png',
    link: 'https://github.com/iyadrozan',
    desc: 'Solusi Transportasi Canggih',
    color: '#EFE8D3'
  },
  {
    title: 'Corporate Identity Solutions',
    src: 'silencio.png',
    link: 'https://github.com/iyadrozan',
    desc: 'Pengembangan Identitas Bisnis',
    color: '#706D73'
  }
]

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        {
          projects.map( (project, index) => {
            return <Project index={index} title={project.title} setModal={setModal} link={project.link} desc={project.desc} key={index} />
          })
        }
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  )
}
