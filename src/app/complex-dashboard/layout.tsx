// import Notifications from "@/components/Notifications/page";
// import RevenueMetrics from "@/components/RevenueMetrics/page";
// import UserAnalytics from "@/components/UserAnalytics/page";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false as boolean;

  return isLoggedIn ? (
    <>
      <div>{children}</div>

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            {/* <UserAnalytics /> */}
            {users}
          </div>
          <div>
            {/* <RevenueMetrics /> */}
            {revenue}
          </div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>
          {/* <Notifications /> */}
          {notifications}
        </div>
      </div>
    </>
  ) : (
    <>{login}</>
  );
}
