import React from 'react';
import DashboardCard from '../../../components/shared/DashboardCard';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from '@mui/lab';
import { Link, Typography } from '@mui/material';

const RecentEvents = () => {
  return (
    <DashboardCard title="Recent Events">
      <>
        <Timeline
          className="theme-timeline"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          sx={{
            p: 0,
            mb: '-40px',
            '& .MuiTimelineConnector-root': {
              width: '1px',
              backgroundColor: '#efefef'
            },
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.5,
              paddingLeft: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent>March 2nd</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent fontWeight="600">Active Mobile V4_2.40.apk</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>March 10th</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography fontWeight="600">ADI OtoSense SMS_2.3.1.apk</Typography>
              
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>March 10th</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent fontWeight="600">Aipower Smart_1.0.7726.apk</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>March 10th</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="warning" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography fontWeight="600">2PM LIGHT STICK_1.0.8.apk</Typography>{' '}
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>March 10th</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="error" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography fontWeight="600">3R-Protect Manager_2.1.3.apk</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>March 12th</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" variant="outlined" />
            </TimelineSeparator>
            <TimelineContent fontWeight="600">2019 Grey Cup Festival_1.2.apk</TimelineContent>
          </TimelineItem>
        </Timeline>
      </>
    </DashboardCard>
  );
};

export default RecentEvents;