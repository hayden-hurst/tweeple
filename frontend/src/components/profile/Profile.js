import React from 'react';
import './Profile.css';
function Profile() {
    const fakeProfile = {
        username: 'hayden-hurst',
        name: 'Hayden Hurst',
        bio: 'Full-stack Developer | Software Engineer | Bassist',
        location: 'Mooresville, North Carolina',
        followers: 1000,
        following: 500,
    };

    return (
        <header className="Profile-header">
            <div className="profile-container">
            <h1>{fakeProfile.name}</h1>
            <p>@{fakeProfile.username}</p>
            <p>{fakeProfile.bio}</p>
            <p>{fakeProfile.location}</p>
            <p>Followers: {fakeProfile.followers} | Following: {fakeProfile.following}</p>
            </div>
        </header>
    );
}

export default Profile;