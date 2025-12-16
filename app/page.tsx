import Navbar from '../components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Tools from '@/components/Tools';
import Hobbies from '@/components/Hobbies'
import Footer from '@/components/Footer';
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Project from '@/components/Project'


export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <section className=" pt-12">
          <div className=" lg:grid-cols-2 gap-12">
            <About />
              <section>            
            <div className=" mt-10 space-y-8">
              <Education />
              <div>
              <Hobbies />
              </div>
              <Experience />
              <Tools />
            

            </div>
            
            <Skills/>
            </section>
          </div>
        </section>
      </main>
      <section>
      <Project/>
      <Contact/>
      <Footer />
      </section>
    </>
  );
}
