// @flow
import * as React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { Row } from '../discoverCommunities/style';
import { CommunityProfile } from '../../../../components/profile';

type Props = {
  toggleCommunityMembership: Function,
  dispatch: Function,
  joinedFirstCommunity: Function,
  joinedCommunity: Function,
  community: {
    id: string,
    slug: string,
    coverPhoto: string,
    profilePhoto: string,
    name: string,
    description: string,
  },
};

class JoinFirstCommunityPure extends React.Component<Props> {
  render() {
    const { community, joinedCommunity } = this.props;

    return (
      <Row style={{ alignItems: 'flex-start' }}>
        <CommunityProfile
          profileSize={'upsell'}
          data={{ community }}
          onJoin={() => joinedCommunity(1, true)}
        />
      </Row>
    );
  }
}

const map = state => ({
  currentUser: state.users.currentUser,
});

const JoinFirstCommunity = compose(
  // $FlowIssue
  connect(map)
)(JoinFirstCommunityPure);
export default JoinFirstCommunity;
