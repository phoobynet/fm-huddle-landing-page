import Logo from './Logo'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

const stories: ComponentMeta<typeof Logo> = {
  title: 'components/images/Logo',
  component: Logo,
}

const Template: ComponentStory<typeof Logo> = (args) => <Logo />

export const Default = Template.bind({})

export default stories
