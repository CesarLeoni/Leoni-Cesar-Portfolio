import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Pending from './components/Pending';
import LinkedInPosts from './components/LinkedInPosts';
import Skills from "./components/Skills";
import Experience from './components/Experience';

const App = () => {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
       <div className="bg-image fixed inset-0 
       bg-cover bg-center"></div>
        <div className="relative z-10">
          <Navbar/>
          <Hero />
          <Projects />
          <Skills />
          <Experience/>
          <LinkedInPosts />
          <Pending />
       </div>
    </main>

    
  )
}

export default App;