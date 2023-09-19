const RolesView = {
  GUEST: GuestView,
  ADMIN: AdminView,
  CONTRIBUTOR: ContributorView,
};
export default function UserView({ role }) {
  const CurrentView = RolesView[role] ?? DefaultView;

  return (
    <div>
      <CurrentView />
    </div>
  );
}
