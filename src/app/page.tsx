"use client"
import { useState } from 'react'
import type { ReactNode } from 'react';

import {
  Intro,
  Projects,
  Modal,
  TechnicalKnowledge,
  OtherSkills,
  ContactMe,
  // BreakPoints,
} from "@/components";

export default function Home(): ReactNode {
  const [selectedProject, setSelectedProject] = useState("")

  return (
    <main className='scroll-smooth'>
      {/* <BreakPoints /> */}
      <Intro />
      <Projects setSelectedProject={setSelectedProject} />
      <Modal
        selectedProject={selectedProject}
        closeModal={() => setSelectedProject("")}
      />
      <TechnicalKnowledge />
      <OtherSkills />
      <ContactMe />
    </main>
  );
}