// app/team/[teamId]/page.tsx

import React from 'react';
import TeamInfo from './components/TeamInfo';
import StyledContainer from '@/components/StyledContainer';

const TeamPage = () => {
  return (
    <StyledContainer>
      <div>
        <TeamInfo />
      </div>
    </StyledContainer>
  );
}

export default TeamPage;
