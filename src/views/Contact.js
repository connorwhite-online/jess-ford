import React from 'react'
import { InlineWidget } from 'react-calendly'

export default function Contact() {
    return (
        <div className="contact">
            <InlineWidget url="https://calendly.com/your_scheduling_page" />
        </div>
    )
}