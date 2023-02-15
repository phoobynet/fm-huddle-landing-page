import CallToActionBtn from './CallToActionBtn'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

const stories: ComponentMeta<typeof CallToActionBtn> = {
  title: 'components/CallToActionBtn',
  component: CallToActionBtn,
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

const Template: ComponentStory<typeof CallToActionBtn> = (args) => (
  <CallToActionBtn {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Call To Action',
}

export default stories
