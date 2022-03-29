import React from 'react'
import { InlineWidget } from 'react-calendly'
import { FormControl } from '@mui/material'

export default function Contact() {
    return (
        <div className="contact">
            <div className="questionnaire">
            {/* <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                </FormControl> */}
            </div>
            <div className="calendly">
                <InlineWidget url="https://calendly.com/jessfordcare" />
            </div>
            
        </div>
    )
}