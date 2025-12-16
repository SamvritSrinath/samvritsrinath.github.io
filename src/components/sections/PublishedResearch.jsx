import {motion} from 'framer-motion';
import {optimizedViewport} from '@/lib/animations';
import {GlassCard} from '@/components/glass/GlassCard';
import {ExternalLink, FileText, Calendar, Users} from 'lucide-react';

const publications = [
  {
    title:
      'Integrating Large Language Models and Evaluating Student Outcomes in an Introductory Computer Science Course',
    authors:
      'Annapurna Vadaparty, David H. Smith IV, Samvrit Srinath, Mounika Padala, Christine Alvarado, Jamie Gorson Benario, Daniel Zingaro, Leo Porter',
    conference: 'arXiv preprint (cs.CY)',
    year: '2025',
    arxiv: 'https://arxiv.org/abs/2510.18806',
    abstract:
      'Generative AI (GenAI) models have broad implications for education in general, impacting the foundations of what we teach and how we assess. This is especially true in computing, where LLMs tuned for coding have demonstrated shockingly good performance on the types of assignments historically used in introductory CS (CS1) courses. As a result, CS1 courses will need to change what skills are taught and how they are assessed. Computing education researchers have begun to study student use of LLMs, but there remains much to be understood about the ways that these tools affect student outcomes. In this paper, we present the design and evaluation of a new CS1 course at a large research-intensive university that integrates the use of LLMs as a learning tool for students. We describe the design principles used to create our new CS1-LLM course, our new course objectives, and evaluation of student outcomes and perceptions throughout the course as measured by assessment scores and surveys. Our findings suggest that 1) student exam performance outcomes, including differences among demographic groups, are largely similar to historical outcomes for courses without integration of LLM tools, 2) large, open-ended projects may be particularly valuable in an LLM context, and 3) students predominantly found the LLM tools helpful, although some had concerns regarding over-reliance on the tools.',
    tags: ['LLMs', 'CS1', 'Education', 'GenAI'],
  },
  {
    title: 'Assessing Problem Decomposition in CS1 for the GenAI Era',
    authors:
      'Samvrit Srinath, Annapurna Vadaparty, David H. Smith IV, Leo Porter, Daniel Zingaro',
    conference: 'arXiv preprint (cs.CY)',
    year: '2025',
    arxiv: 'https://arxiv.org/abs/2511.05764',
    abstract:
      "Problem decomposition--the ability to break down a large task into smaller, well-defined components--is a critical skill for effectively designing and creating large programs, but it is often not included in introductory computer science curricula. With the rise of generative AI (GenAI), students even at the introductory level are able to generate large quantities of code, and it is becoming increasingly important to equip them with the ability to decompose problems. There is not yet a consensus among educators on how to best teach and assess the skill of decomposition, particularly in introductory computing. This practitioner paper details the development of questions to assess the skill of problem decomposition, and impressions about how these questions were received by students. A challenge unique to problem decomposition questions is their necessarily lengthy context, and we detail our approach to addressing this problem using Question Suites: scaffolded sequences of questions that help students understand a question's context before attempting to decompose the problem.",
    tags: ['Problem Decomposition', 'CS1', 'Education', 'GenAI', 'Assessment'],
  },
];

export const PublishedResearch = () => {
  return (
    <section id="research" className="py-16 sm:py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={optimizedViewport}
          transition={{duration: 0.3}}
          className="mb-12 sm:mb-16 md:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text-primary">
            Published Research
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-white max-w-3xl mx-auto px-4">
            Peer-reviewed publications and ongoing research in security,
            systems, and machine learning
          </p>
        </motion.div>

        {/* Publications */}
        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16 md:mb-20">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.3, delay: index * 0.1}}>
              <GlassCard
                variant="light"
                border="glow"
                className="p-4 sm:p-6 md:p-8 hover:border-blue-400/40 transition-all duration-500">
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                  {/* Main Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-blue-400">
                      {pub.title}
                    </h3>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm text-muted-foreground dark:text-white">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{pub.authors}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{pub.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>{pub.conference}</span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground dark:text-white mb-4 leading-relaxed">
                      {pub.abstract}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-blue-500/20 text-blue-400 border border-blue-400/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex sm:flex-row lg:flex-col gap-3 lg:justify-start">
                    <a
                      href={pub.arxiv}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-primary/20 hover:bg-primary/30 border border-blue-400/30 transition-all duration-500 hover:shadow-glow-blue whitespace-nowrap text-sm sm:text-base">
                      <ExternalLink className="w-5 h-5" />
                      View on Arxiv
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
