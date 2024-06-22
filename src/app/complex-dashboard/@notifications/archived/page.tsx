import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <h1>Archived Notifications</h1>
      <Link href="/complex-dashboard" className="border-2 p-2">
        Default
      </Link>
    </Card>
  );
}
