import React from 'react'
import NavPage from '../common/nav-page'
import ParseMD from '../utils/parse-md'
import raw from 'raw.macro'
import {FencedCode, RewindSpringProvider, RewindSpring} from '../common/components'
import {animated} from 'react-spring'
import Demo from '../examples/components/Demo'

const content1 = raw('./md/basics-1.md')
const content2 = raw('./md/basics-2.md')

export default function BasicsDocsPage({path}) {
  return (
    <NavPage currentPath={path}>
      <ParseMD contents={content1} />
      <RewindSpringProvider>
        <p>Although you can use them as such.</p>
        <div className="code-table">
          <FencedCode>
            {`const props = useSpring({ opacity: 1, from: { opacity: 0 } })
return <animated.h1 style={props}>hello</animated.h1>`}
          </FencedCode>
          <RewindSpring>{x => <animated.div style={{opacity: x}}>hello</animated.div>}</RewindSpring>
        </div>
        <p>Do with them whatever you like, animate attributes for instance,</p>
        <div className="code-table">
          <FencedCode>
            {`const props = useSpring({ x: 100, from: { x: 0 } })
return (
  <animated.svg strokeDashoffset={props.x}>
    <path d="..." />
  </animated.svg>
)`}
          </FencedCode>
          <RewindSpring>
            {x => (
              <animated.svg
                style={{width: 120, height: 120, opacity: x.interpolate({range: [0, 0.05, 1], output: [0, 1, 1]})}}
                viewBox="0 0 45 44"
                strokeWidth="2"
                fill="white"
                stroke="rgb(45, 55, 71)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={156}
                strokeDashoffset={x.interpolate(x => (1 - x) * 156)}
              >
                <polygon points="22.5 35.25 8.68704657 42.5118994 11.3250859 27.1309497 0.150171867 16.2381006 15.5935233 13.9940503 22.5 0 29.4064767 13.9940503 44.8498281 16.2381006 33.6749141 27.1309497 36.3129534 42.5118994" />
              </animated.svg>
            )}
          </RewindSpring>
        </div>
        <p>or innerText,</p>
        <div className="code-table">
          <FencedCode>
            {`const props = useSpring({ number: 1, from: { number: 0 } })
return <animated.span>{props.number}</animated.span>`}
          </FencedCode>
          <RewindSpring>{x => <animated.div style={{fontFamily: 'monospace'}}>{x.interpolate(n => n.toFixed(2))}</animated.div>}</RewindSpring>
        </div>
        <p>or generic React-component props.</p>
        <div className="code-table">
          <FencedCode>
            {`const AnimatedDonut = animated(Donut)
// ...
const props = useSpring({ value: 100, from: { value: 0 } })
return <AnimatedDonut percent={props.value} />`}
          </FencedCode>
          <RewindSpring>
            {x => (
              <animated.svg
                style={{width: 120, height: 120, opacity: x.interpolate({range: [0, 0.05, 1], output: [0, 1, 1]})}}
                viewBox="0 0 51 51"
                strokeWidth="2.5"
                fill="white"
                stroke="rgb(45, 55, 71)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={156}
                strokeDashoffset={x.interpolate(x => (1 - x) * 156)}
              >
                <circle transform="translate(25.500000, 25.500000) rotate(-270.000000) translate(-25.500000, -25.500000)" cx="25.5" cy="25.5" r="24.5" />
              </animated.svg>
            )}
          </RewindSpring>
        </div>
      </RewindSpringProvider>
      <ParseMD contents={content2} />
      <Demo link="https://codesandbox.io/s/88lmnl6w88" import={import('../examples/demos/keyframes')} />
    </NavPage>
  )
}