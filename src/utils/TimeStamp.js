import React from 'react'
import Moment from 'react-moment'

const TimeStamp = props => <Moment fromNow>{props.children}</Moment>
export default TimeStamp
