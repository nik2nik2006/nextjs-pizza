export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        DASHBOARD HEADER
        <body>{children}</body>
        </html>
    );
}
