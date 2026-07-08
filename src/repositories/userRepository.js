
export function create(userData) {
    // Here you would typically add logic to save the user data to a database
    // For now, we'll just log the user data to the console
    console.log('Creating user in repo:', userData);
}

const userRepository = {
    create,
};

export default userRepository;
