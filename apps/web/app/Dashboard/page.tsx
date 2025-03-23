// app/Dashboard/page.tsx
import { DashboardLayout } from "@/components/dashboard-layout";

export const dynamic = 'force-dynamic';

export default function DashboardPage() {
    return (
        <DashboardLayout>
            {/* Page-specific content goes here */}
            <div className="mb-6">
            </div>
        </DashboardLayout>
    );
}