import { motion } from 'framer-motion'
import Card from '../components/ui/Card'
import SectionWrapper from '../components/ui/SectionWrapper'
import { fadeIn, staggerContainer } from '../lib/animations'

const beginnerRoboticsCourses = [
  {
    title: 'ROBOTICS BASICS',
    contents: ['What is a robot?', 'Types of robots', 'Basic robot parts overview'],
  },
  {
    title: 'ELECTRONICS FOR BEGINNERS',
    contents: ['Current, voltage, resistance', 'Breadboard and wiring practice', 'LED and buzzer circuits'],
  },
  {
    title: 'SENSORS AND MOTORS',
    contents: ['DC motor and servo basics', 'Ultrasonic and IR sensors', 'Reading sensor values'],
  },
  {
    title: 'MICROCONTROLLER STARTER',
    contents: ['Arduino board introduction', 'Writing first simple program', 'Upload, test, and troubleshoot'],
  },
  {
    title: 'BUILD A SIMPLE ROBOT',
    contents: ['Line follower robot', 'Obstacle avoidance robot', 'Battery and chassis setup'],
  },
  {
    title: 'SAFETY AND MAINTENANCE',
    contents: ['Safe handling of tools', 'Battery safety checks', 'Basic robot maintenance routine'],
  },
]

export default function LiveTrainingSection() {
  return (
    <SectionWrapper
      id="live-training"
      eyebrow="Live Training"
      title="Beginner Robotics Course Contents"
      subtitle="Practical beginner modules focused on fundamentals only, designed for students and fresh starters."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {beginnerRoboticsCourses.map((course) => (
          <motion.div key={course.title} variants={fadeIn}>
            <Card className="h-full p-5">
              <h3 className="text-lg font-semibold text-slate-100">{course.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {course.contents.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
