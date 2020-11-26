import React from 'react';
import Card from './Card'

export default {
    title: 'Cards/Card',
    component: Card
}

const Template = (args) => <Card {...args} />

export const card = Template.bind({});
card.args = {
    title: 'Title',
    text: 'Lorem ipsum'
};