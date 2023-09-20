export default function Home() {
  const users = {
    ids: [1, 2, 3],
    entities: [
      { id: 1, name: "George" },
      { id: 2, name: "Susan" },
      { id: 3, name: "Bob" },
    ],
  };

  const findUserById = (id) => {
    return users?.entities[id];
  };

  return <UsersList users={users} />;
}
