export default function Home() {
  const users = [
    { id: 1, name: "George" },
    { id: 2, name: "Susan" },
    { id: 3, name: "Bob" },
  ];

  const findUserById = (id) => {
    return users.find((user) => user.id === id);
  };

  return <UsersList users={users} />;
}
