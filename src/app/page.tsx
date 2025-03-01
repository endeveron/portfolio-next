import Certificates from '@/components/certificates/Certificates';
import Hero from '@/components/hero/Hero';
import Projects from '@/components/projects/Projects';
import Contacts from '@/components/contacts/Contacts';
import Skills from '@/components/skills/Skills';

export default function Main() {
  return (
    <main className="flex flex-col m-auto max-w-[1400px] font-[family-name:var(--font-montserrat-sans)]">
      {/* <div className="flex sm:w-[640px]">
        <Endeveron />
      </div> */}

      {/* First screen */}
      <div className="flex flex-col md:flex-row">
        <Hero />
        <Skills />
      </div>

      <div className="mt-40 md:mt-24">
        <Projects />
      </div>

      <div className="flex flex-col mt-40 mb-20 lg:px-16 xl:px-32">
        <Certificates />
        <Contacts />
      </div>
    </main>
  );
}
