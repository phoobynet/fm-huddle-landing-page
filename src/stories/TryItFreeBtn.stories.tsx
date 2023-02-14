import TryItFreeBtn from '@/components/TryItFreeBtn'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

const tryItFreeBtn: ComponentMeta<typeof TryItFreeBtn> = {
  title: 'components/TryItFreeBtn',
  component: TryItFreeBtn,
}

const Template: ComponentStory<typeof TryItFreeBtn> = (args) => (
  <TryItFreeBtn {...args} />
)

export const Default = Template.bind({})

Default.args = {
  label: 'Try It Free',
  clickHandler: () => {},
}

export default tryItFreeBtn
