import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-100 container mx-auto p-4 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-4">My Profile</h1>

        {/* User Avatar and Email */}
        <div className="flex flex-col items-center mb-4">
          <img
            src="/assets/avatar.JPG" // Will be Replaced with the actual avatar URL from the backend later
            alt="User Avatar"
            className="rounded-full w-24 h-24"
          />
          <span>{user.email}</span>
        </div>

        <div className="space-y-5">
          {/* User Info */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="font-bold">Name:</div>
            <div>{user.firstName}</div>
          </div>

          {/* Achievements */}
          <h2>
            <a href="#achievements">Achievements</a>
          </h2>
          {/* Add a component or map function to display achievements */}

          {/* Leaderboards */}
          <h2>
            <a href="#leaderboards">Leaderboards</a>
          </h2>
          {/* Add a component or map function to display leaderboards */}

          {/* Certificates */}
          <h2>
            <a href="#certificates">Certificates</a>
          </h2>
          {/* Add a component or map function to display certificates */}

          {/* Practical Assessment Results */}
          <h2>
            <a href="#practical-assessment-results">
              Practical Assessment Results
            </a>
          </h2>
          {/* Add a component or map function to display practical assessment results */}

          {/* My Performance */}
          <h2>
            <a href="#my-performance">My Performance</a>
          </h2>
          {/* Add a component or map function to display performance metrics */}

          {/* Account Settings */}
          <h2>
            <a href="#account-settings">Account Settings</a>
          </h2>
        </div>

        {/* Footer Links */}
        <footer className="mt-6">
          <a href="/terms" className="text-accent-6 hover:underline">
            Terms and Conditions and Privacy Policy
          </a>
          <button
            onClick={() => {
              // Handle contact support action
              console.log("Contact support clicked");
            }}
            className="ml-4 bg-accent-6 text-white px-3 py-1 rounded hover:bg-accent-4 hover:text-accent-7"
          >
            Contact support
          </button>
          <button
            onClick={() => {
              // Handle sign out action
              console.log("Sign out clicked");
            }}
            className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Sign out
          </button>
        </footer>
      </div>
    </div>
  );
};

export default UserProfile;
