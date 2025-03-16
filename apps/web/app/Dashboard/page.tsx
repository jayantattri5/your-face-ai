// app/Dashboard/page.tsx
import { DashboardLayout } from "@/components/dashboard-layout";

export default function DashboardPage() {
    return (
        <DashboardLayout>
            {/* Page-specific content goes here */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Your Dashboard</h1>
                <p className="text-gray-500">Welcome to your image generation dashboard</p>
            </div>
        </DashboardLayout>
    );
}