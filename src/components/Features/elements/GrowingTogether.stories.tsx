import GrowingTogether from './GrowingTogether'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

const stories: ComponentMeta<typeof GrowingTogether> = {
  title: 'Components/Features/GrowingTogether',
  component: GrowingTogether,
}

const Template: ComponentStory<typeof GrowingTogether> = () => (
  <GrowingTogether />
)

export const Default = Template.bind({})

export default stories
