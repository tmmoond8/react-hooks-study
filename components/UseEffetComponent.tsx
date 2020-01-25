import React, { useEffect, useState } from 'react';

interface IProps {
  friend: {
    id: number;
  };
}

const ChatAPI = {
  subscribeToFriendStatus: (id, handleStatusChange) => {
    console.log(`subscribeToFriendStatus ${id}`);
    handleStatusChange({
      isOnline: true,
    });
  },
  unsubscribeFromFriendStatus: (id, handleStatusChange) => {
    console.log(`unsubscribeFromFriendStatus ${id}`);
    handleStatusChange({
      isOnline: false,
    });
  },
};

class FriendStatus extends React.Component<IProps, any> {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange,
    );
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange,
    );
  }

  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline,
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return 'Loading...';
    }
    return this.state.isOnline ? 'Online' : 'Offline';
  }
}

function FriendStatusWithHooks(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props?.friend?.id || 32, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props?.friend?.id || 32, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return <p>Lodding...</p>
  }
  return <p>{isOnline ? 'Online' : 'Offline'}</p>;
}

export default FriendStatusWithHooks;
