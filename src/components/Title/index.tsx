import React, { useEffect, useState } from 'react';
import GitHubService from '../../services/api';

interface UserProfileProps {
  username: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ username }) => {
  const [userData, setUserData] = useState({
    name: '',
    bio: 'No bio available',
    company: 'No company information',
    publicRepos: 0,
    location: 'No location provided',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await GitHubService.getUser(username);
        setUserData({
          name: user.name || 'No name available',
          bio: user.bio || 'No bio available',
          company: user.company || 'No company information',
          publicRepos: user.publicRepos || 0,
          location: user.location || 'No location provided',
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div className="text-black">
      <p className="text-xl font-bold mb-4 text-black">{userData.name}</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p><strong className="text-black">Bio:</strong> {userData.bio}</p>
          <p><strong className="text-black">Company:</strong> {userData.company}</p>
        </div>
        <div>
          <p><strong className="text-black">Public Repositories:</strong> {userData.publicRepos}</p>
          <p><strong className="text-black">Location:</strong> {userData.location}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
