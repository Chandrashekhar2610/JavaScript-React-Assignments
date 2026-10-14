
import "./App.css";

function ProfileCard({ name, role, image, description, skills }) {
    return (
        <div className="profile-card">
            <div className="profile-banner"></div>

            <img
                src={image}
                alt={`${name} profile`}
                className="profile-image"
            />

            <div className="profile-content">
                <h2>{name}</h2>
                <p className="role">{role}</p>

                <p className="description">{description}</p>

                <h3>My Skills</h3>

                <div className="skills">
                    {skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                    ))}
                </div>

                <button
                    onClick={() =>
                        alert(`Hello! I am ${name}. Nice to meet you!`)
                    }
                >
                    View Profile
                </button>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1>My Profile</h1>
            <p className="subtitle">
                Welcome to my personal profile card
            </p>

            <ProfileCard
                name="Chandrashekhar Samshete"
                role="MCA Student | Aspiring Software Developer"
                image="https://randomuser.me/api/portraits/men/32.jpg"
                description="I am passionate about programming, web development, Java, Python, and learning new technologies."
                skills={[
                    "Java",
                    "Python",
                    "JavaScript",
                    "React",
                    "HTML & CSS",
                    "MySQL"
                ]}
            />
        </div>
    );
}

export default App;
