import Card from "@/components/card";
import Link from "next/link";

export default function DefaultNotifications() {
  return (
    <Card>
      <h1>Notifications</h1>
      <Link href="/complex-dashboard/archived" className="border-2 p-2">
        Archived
      </Link>
    </Card>
  );
}
