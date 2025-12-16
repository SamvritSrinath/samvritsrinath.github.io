import {useState} from 'react';
import {motion} from 'framer-motion';
import {GlassSection} from '@/components/glass/GlassSection';
import {GlassCard} from '@/components/glass/GlassCard';
import {
  glassVariants,
  staggerContainer,
  optimizedViewport,
} from '@/lib/animations';

const Skills = () => {
  const [isTitleVisible, setTitleVisible] = useState(false);

  const skillData = [
    {name: 'Python', icon: 'python/python-original'},
    {name: 'C++', icon: 'cplusplus/cplusplus-original'},
    {name: 'Java', icon: 'java/java-original'},
    {name: 'JavaScript', icon: 'javascript/javascript-original'},
    {name: 'Go', icon: 'go/go-original'},
    {name: 'TypeScript', icon: 'typescript/typescript-original'},
    {name: 'React', icon: 'react/react-original'},
    {name: 'Node.js', icon: 'nodejs/nodejs-original'},
    {name: 'MongoDB', icon: 'mongodb/mongodb-original'},
    {name: 'Firebase', icon: 'firebase/firebase-plain'},
    {
      name: 'AWS',
      icon: 'amazonwebservices/amazonwebservices-original-wordmark',
    },
    {name: 'Git', icon: 'git/git-original'},
    {name: 'Docker', icon: 'docker/docker-original'},
    {name: 'Kubernetes', icon: 'kubernetes/kubernetes-plain'},
    {name: 'HTML5', icon: 'html5/html5-original'},
    {name: 'CSS3', icon: 'css3/css3-original'},
  ];

  return (
    <GlassSection className="max-w-5xl mx-auto my-6 sm:my-8 px-4 sm:px-6">
      <motion.div
        onViewportEnter={() => setTitleVisible(true)}
        viewport={optimizedViewport}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 relative">
          <span className="gradient-text-primary">
            Technologies I Work With
          </span>
          <motion.div
            className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full"
            initial={{scaleX: 0}}
            animate={{scaleX: isTitleVisible ? 1 : 0}}
            transition={{duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275]}}
          />
        </h2>
      </motion.div>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={optimizedViewport}>
        {skillData.map((skill, index) => (
          <motion.div key={index} variants={glassVariants} className="group">
            <GlassCard hover className="p-6 flex flex-col items-center gap-4">
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/${skill.icon}.svg`}
                alt={`${skill.name} logo`}
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <p className="font-medium text-muted-foreground text-center transition-colors duration-300 group-hover:text-foreground">
                {skill.name}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </GlassSection>
  );
};

export default Skills;
