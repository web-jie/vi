import Basic from './components/Basic/router'
import Data from './components/Data/router'
import Form from './components/Form/router'
import Navigation from './components/Navigation/router'
import Notice from './components/Notice/router'
import Others from './components/Others/router'
import guide from './guide/router'
import prototype from './prototype/router'
import plugins from './plugin/router'

export default [
  ...Basic,
  ...Data,
  ...Form,
  ...Navigation,
  ...Notice,
  ...Others,
  ...guide,
  ...prototype,
  ...plugins
]