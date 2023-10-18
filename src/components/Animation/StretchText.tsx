import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'

type WordProps = {
  word: string
  whileInView?: boolean
  once?: boolean
}
type StretchTextProps = {
  whileInView?: boolean
  once?: boolean
  children: React.ReactElement
}

const firstLetterVariants = {
  default: {
    opacity: 0.2,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.85 },
  },
}
const restWordsVariants = {
  initial: { width: 0, opacity: 0 },
  animate: {
    width: 'auto',
    opacity: 1,
    transition: {
      width: { type: 'spring', duration: 0.4, delay: 0.5 },
      opacity: { type: 'spring', duration: 0.4, delay: 0.9 },
    },
  },
}

const getTexts = (element: React.ReactElement): string[] => {
  if (typeof element.props.children === 'string') {
    return [element.props.children]
  } else if (Array.isArray(element.props.children)) {
    return element.props.children.reduce((acc: string[], cur: any) => {
      if (typeof cur === 'string') acc = acc.concat(cur)
      return acc
    }, [])
  } else {
    throw new TypeError('Unhandled type')
  }
}

const Word = ({ word, whileInView = false, once = false }: WordProps) => {
  const firstLetter = word.slice(0, 1)
  const restWord = word.slice(1)

  return (
    <>
      <motion.span
        variants={firstLetterVariants}
        initial={{ opacity: 0.2 }}
        animate={whileInView ? undefined : 'animate'}
        whileInView={whileInView ? 'animate' : undefined}
        viewport={{ once }}
      >
        {firstLetter}
      </motion.span>
      <motion.span
        variants={restWordsVariants}
        initial="initial"
        animate={whileInView ? undefined : 'animate'}
        whileInView={whileInView ? 'animate' : undefined}
        viewport={{ once }}
        className="inline-block"
      >
        {restWord}
      </motion.span>
      &nbsp;
    </>
  )
}

const StretchText = ({
  whileInView = false,
  once = false,
  children,
}: StretchTextProps) => {
  const Component = children.type
  const { className, ...props } = children.props as any

  const texts = getTexts(children)

  return (
    <Component
      className={clsx(className, 'whitespace-nowrap')}
      {...props}
      children={null}
    >
      {texts.map((text, i) => (
        <span key={i}>
          {text.split(' ').map((word, j) => (
            <Word key={j} word={word} whileInView={whileInView} once={once} />
          ))}
          <br />
        </span>
      ))}
    </Component>
  )
}

export default StretchText
