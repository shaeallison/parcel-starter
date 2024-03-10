import renderer from 'react-test-renderer'
import { Button } from './Button'

it('changes the class when hovered', () => {
  const component = renderer.create(<Button id='test-id'>Facebook</Button>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // // manually trigger the callback
  // renderer.act(() => {
  //   tree.props.onMouseEnter()
  // })
  // // re-rendering
  // tree = component.toJSON()
  // expect(tree).toMatchSnapshot()

  // // manually trigger the callback
  // renderer.act(() => {
  //   tree.props.onMouseLeave()
  // })
  // // re-rendering
  // tree = component.toJSON()
  // expect(tree).toMatchSnapshot()
})
