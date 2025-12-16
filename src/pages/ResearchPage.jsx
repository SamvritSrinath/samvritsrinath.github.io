import {motion} from 'framer-motion';
import {useEffect} from 'react';
import {ExternalLink, FileText} from 'lucide-react';
import {FaGithub} from 'react-icons/fa';
import {GlassSection} from '@/components/glass/GlassSection';
import {GlassCard} from '@/components/glass/GlassCard';
import {techIconMap} from '@/utils/techIcons.jsx';
import {
  glassVariants,
  staggerContainer,
  optimizedViewport,
} from '@/lib/animations';
import {cn} from '@/lib/utils';
import {resumeData} from '@/data/resumeData';

const ResearchPage = () => {
  // Filter research projects: IP-Sage, CS1-LLM Experience Report, GPU Megakernels, and Problem Decomposition
  const researchProjects = resumeData.projects.filter(
    p =>
      p.title === 'IP-Sage' ||
      p.title === 'CS1-LLM Experience Report' ||
      p.title === 'GPU Megakernels: Optimizing LLM Performance' ||
      p.category === 'Research',
  );

  // Add Problem Decomposition as a research project entry
  const problemDecompositionProject = {
    title: 'Problem Decomposition',
    description:
      'Research on assessing and teaching problem decomposition skills in CS1 courses for the GenAI era. Developed novel Problem Decomposition Question Suites to analyze student performance and enhance teaching methodologies. This work focuses on helping students break down large tasks into smaller, well-defined components—a critical skill for effectively designing and creating large programs.',
    technologies: ['Python', 'Pandas', 'Curriculum Design', 'Assessment'],
    link: 'https://arxiv.org/abs/2511.05764',
    images: [],
    category: 'Research',
  };

  const allResearchProjects = [
    ...researchProjects,
    problemDecompositionProject,
  ];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          className="mb-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 gradient-text-primary">
            Research Projects
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground dark:text-white max-w-3xl mx-auto px-4">
            Ongoing research in networking, systems, and computer science
            education
          </p>
        </motion.div>

        {/* Research Projects */}
        <GlassSection className="max-w-7xl mx-auto my-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={optimizedViewport}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allResearchProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={glassVariants}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={optimizedViewport}
                  transition={{duration: 0.3, delay: index * 0.1}}>
                  <GlassCard
                    variant="light"
                    border="glow"
                    className="p-6 h-full hover:border-blue-400/40 transition-all duration-500">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">
                      {project.title}
                    </h3>

                    {/* Image if available */}
                    {project.images && project.images.length > 0 && (
                      <div className="w-full h-48 rounded-lg shadow-glass overflow-hidden relative flex items-center justify-center mb-4 bg-background/40">
                        <img
                          src={project.images[0]}
                          alt={`${project.title} screenshot`}
                          className="max-w-full max-h-full w-auto h-auto object-contain bg-black/10 backdrop-blur-sm"
                          loading="lazy"
                        />
                      </div>
                    )}

                    <p className="text-sm sm:text-base text-muted-foreground dark:text-white mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className={cn(
                            'flex items-center gap-2',
                            'bg-background/50 backdrop-blur-sm',
                            'px-3 py-1 rounded-lg text-xs',
                            'border border-primary',
                            'whitespace-nowrap',
                          )}>
                          {techIconMap[tech] || <span></span>}
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                      {/* GitHub link, if available */}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400 transition-colors duration-300">
                          <FaGithub className="w-4 h-4" />
                          GitHub
                        </a>
                      )}

                      {/* Paper link, if available */}
                      {(project.paper ||
                        (project.link &&
                          (project.link.includes('arxiv.org') ||
                            project.link.includes('.pdf')))) && (
                        <a
                          href={project.paper || project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400 transition-colors duration-300">
                          <FileText className="w-4 h-4" />
                          {(project.paper || project.link).includes('arxiv.org')
                            ? 'View on Arxiv'
                            : 'View Paper'}
                        </a>
                      )}

                      {/* Fallback generic project link */}
                      {!project.paper &&
                        project.link &&
                        !project.link.includes('arxiv.org') &&
                        !project.link.includes('.pdf') && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400 transition-colors duration-300">
                            <ExternalLink className="w-4 h-4" />
                            View Project
                          </a>
                        )}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </GlassSection>
      </div>
    </div>
  );
};

export default ResearchPage;
