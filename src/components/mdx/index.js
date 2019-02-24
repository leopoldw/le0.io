import CodeBlock from './CodeBlock'
import P from './P'
import Blockquote from './Blockquote'
import Bold from './Bold'
import InlineCode from './InlineCode'
import Em from './Em'
import H2 from './H2'
import H3 from './H3'
import Li from './Li'
import A from './A'
import Ul from './Ul'

export default {
  code: CodeBlock,
  inlineCode: InlineCode,
  p: P,
  blockquote: Blockquote,
  strong: Bold,
  em: Em,
  h2: H2,
  h3: H3,
  li: Li,
  a: A,
  ul: Ul,
  emphasis: () => `LOL`,
}