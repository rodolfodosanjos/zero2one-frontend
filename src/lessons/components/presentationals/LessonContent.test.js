import { shallowMount } from '@vue/test-utils'
import LessonContent from './LessonContent'

describe('LessonContent', () => {
  const createComponent = props => shallowMount(LessonContent, {
    propsData: props
  })

  const createFakeLesson = () => ({
    id: '1',
    name: 'fake name'
  })

  it('should match snapshot', () => {
    expect(createComponent({
      lesson: createFakeLesson()
    })).toMatchSnapshot()
  })

  it('should pass right props to lesson content', () => {
    const fakeLesson = createFakeLesson()

    const $wrapper = createComponent({
      lesson: fakeLesson
    })

    expect($wrapper.text()).toContain(fakeLesson.name)

    const $DocumentsContainer = $wrapper.find( { name: 'DocumentsContainer' } )
    expect($DocumentsContainer.props('lessonId')).toBe(fakeLesson.id)

    const $MessagesContainer = $wrapper.find( { name: 'MessagesContainer' } )
    expect($MessagesContainer.props('lessonId')).toBe(fakeLesson.id)

  })

})
