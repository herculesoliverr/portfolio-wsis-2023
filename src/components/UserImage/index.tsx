import React, { useEffect, useState } from 'react';
import GitHubService from '../../services/api';

interface UserImageProps {
  username: string;
}

const UserImage: React.FC<UserImageProps> = ({ username }) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserAvatar = async () => {
      try {
        const user = await GitHubService.getUser(username);
        setAvatarUrl(user.avatar_url);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserAvatar();
  }, [username]);

  return (
    <div className="flex items-center justify-center h-32 bg-gray-800">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={`${username}'s avatar`}
          className="rounded-full h-20 w-20 object-cover border-4 border-white"
        />
      ) : (
        <div className="bg-gray-500 rounded-full h-20 w-20"></div>
      )}
    </div>
  );
};

export default UserImage;
