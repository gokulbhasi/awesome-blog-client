import React from 'react'
import { Link } from 'react-router-dom'
import TimeStamp from '../../utils/TimeStamp'
import {
  FeedCardContainer,
  FeedAvtar,
  Title,
  FeedTime,
  FeedTop
} from './feedCard.styles'

const FeedCard = ({
  className,
  cardData: { _id, image, title, body, createdAt }
}) => (
  <Link to={`/post/${_id}`} className='linkNoDecoratoion'>
    <FeedCardContainer className={className}>
      <FeedTop className='dFlex'>
        <FeedAvtar
          style={{
            backgroundImage: `url("${image}")`
          }}
          className='feedAvtr alignSelfStart'
        />
        <Title className='alignSelfCenter fontSemiBold'>
          {title}
        </Title>
        <br />
        <FeedTime className='timeStamp alignSelfEnd mlAuto mr0'>
          <TimeStamp>{new Date(createdAt)}</TimeStamp>
        </FeedTime>
      </FeedTop>
    </FeedCardContainer>
  </Link>
)

export default FeedCard
