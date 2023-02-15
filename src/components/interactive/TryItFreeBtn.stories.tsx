import TryItFreeBtn from './TryItFreeBtn'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

const tryItFreeBtn: ComponentMeta<typeof TryItFreeBtn> = {
  title: 'components/interactive/TryItFreeBtn',
  component: TryItFreeBtn,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '2rem',
          width: '6rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

const Template: ComponentStory<typeof TryItFreeBtn> = (args) => (
  <TryItFreeBtn {...args} />
)

export const Default = Template.bind({})

Default.args = {
  label: 'Try It Free',
}

export default tryItFreeBtn
