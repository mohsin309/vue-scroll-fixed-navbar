import styled from 'vue-styled-components'

const positionProps = { isFixed: Boolean }

export default styled('div', positionProps)`
  .sticky {
    width: 100%;
    z-index: 999;
    position: ${props => (props.isFixed ? "fixed" : "")};
    top: 0;
    left: 0;
  }
`
