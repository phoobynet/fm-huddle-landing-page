import SubscribeBtn from './SubscribeBtn'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

const stories: ComponentMeta<typeof SubscribeBtn> = {
  title: 'components/interactive/SubscribeBtn',
  component: SubscribeBtn,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '12rem',
          margin: '2rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

const Template: ComponentStory<typeof SubscribeBtn> = (args) => (
  <SubscribeBtn {...args} />
)

export const Default = Template.bind({})

Default.args = {
  label: 'Subscribe',
}

export default stories
